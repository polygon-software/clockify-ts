import Clockify from "../src/Clockify";
import {
  clockifyApiKey,
  randomString,
  testProjectId, testTagId, testTaskId,
  testTimeEntryId,
  testUserId,
  testWorkspaceId
} from "./utils";
import { sub } from "date-fns";
import type { NewTimeEntryType } from "../src/Types/NewTimeEntryType";

const clockify = new Clockify(clockifyApiKey);

test("Get your time entries on workspace", async () => {
  const timeEntries = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get();
  expect(timeEntries.length).toBeGreaterThanOrEqual(1);
  const timeEntryIDs = timeEntries.map(timeEntry => timeEntry.id);
  expect(timeEntryIDs).toContain(testTimeEntryId);
})

test("Get a specific time entry on workspace", async () => {
  const timeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).get();
  expect(timeEntry.id).toBe(testTimeEntryId);
})

test("Add a new time entry to workspace && Delete time entry from workspace", async () => {
  // Create new time entry
  const end = new Date();
  const start = sub(end, { hours: 1 });
  const description = `Test description: ${randomString()}`;

  const entry: NewTimeEntryType = {
    start,
    end,
    description,
    projectId: testProjectId,
    taskId: testTaskId,
    tagIds: [testTagId],
  }
  const createdTimeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.post(entry);

  // Ensure time entry exists in workspace
  const timeEntries = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get({
    description
  });
  expect(timeEntries.length).toBe(1);
  expect(timeEntries[0].id).toBe(createdTimeEntry.id);

  // Delete time entry again
  await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(createdTimeEntry.id).delete();

  // Ensure time entry no longer exists on workspace
  const timeEntriesAfterDeletion = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get({
    description
  });
  expect(timeEntriesAfterDeletion.length).toBe(0);
})

test("Add a new time entry for another user on workspace && Delete time entry from workspace", async () => {
  // Create new time entry
  const end = new Date();
  const start = sub(end, { hours: 1 });
  const description = `Test description: ${randomString()}`;

  const entry: NewTimeEntryType = {
    start,
    end,
    description,
    projectId: testProjectId,
    taskId: testTaskId,
    tagIds: [testTagId],
  }
  const createdTimeEntry = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.post(entry);

  // Ensure time entry exists in workspace
  const timeEntries = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get({
    description
  });
  expect(timeEntries.length).toBe(1);
  expect(timeEntries[0].id).toBe(createdTimeEntry.id);

  // Delete time entry again
  await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(createdTimeEntry.id).delete();

  // Ensure time entry no longer exists on workspace
  const timeEntriesAfterDeletion = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get({
    description
  });
  expect(timeEntriesAfterDeletion.length).toBe(0);
})

test("Stop currently running timer on workspace", async () => {
  // Start users timer now by not providing a start date
  const description = `Test description: ${randomString()}`;
  const entry: NewTimeEntryType = {
    description,
    projectId: testProjectId,
    taskId: testTaskId,
    tagIds: [testTagId],
  }
  await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.post(entry);

  // Wait for 5 seconds
  await new Promise(r => setTimeout(r, 2000));

  // Stop timer
  const updatedTimeEntry = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.patch({ end: new Date() });

  // Expect timer to have run for 2 seconds
  expect(["PT2S", "PT1S", "PT3S"]).toContain(updatedTimeEntry.timeInterval.duration);

  // Delete time entry
  await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(updatedTimeEntry.id).delete();
})

test("Update time entry on workspace", async () => {
  // Initial billability is false
  const timeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).get();
  expect(timeEntry.billable).toBeFalsy();

  // Set billable to true
  const updatedTimeEntry = {
    ...timeEntry,
    start: timeEntry.timeInterval.start,
    end: timeEntry.timeInterval.end,
  }
  updatedTimeEntry.billable = true;
  const timeEntryAfterEdit = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).put(updatedTimeEntry);
  expect(timeEntryAfterEdit.billable).toBeTruthy()

  // Set billable back to false again
  updatedTimeEntry.billable = false;
  const timeEntryAfterReset = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).put(updatedTimeEntry);
  expect(timeEntryAfterReset.billable).toBeFalsy()
})
