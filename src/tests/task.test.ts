import Clockify from "../Clockify";
import {clockifyApiKey, randomString, testProjectId, testTaskId, testWorkspaceId} from "./utils";
import {TaskStatusEnum} from "../Types/TaskType";
import type { NewTaskType } from "../Types/NewTaskType";

const clockify = new Clockify(clockifyApiKey);

test("Find tasks on project", async () => {
  const tasks = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.get();
  expect(tasks.length).toBeGreaterThanOrEqual(1);
  const taskIds = tasks.map(task => task.id);
  expect(taskIds).toContain(testTaskId);
})

test("Find task on project by ID", async () => {
  const task = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).get();
  expect(task.id).toBe(testTaskId);
})

test("Add a new task on project && Delete task from project", async () => {
  // Create new Task
  const task: NewTaskType = {
    name: `Test Task: ${randomString()}`,
  };
  const createdTask = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.post(task);
  expect(createdTask.name).toBe(task.name);

  // Ensure task is part of project now
  const tasks = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.get();
  const taskIds = tasks.map(task => task.id);
  expect(taskIds).toContain(createdTask.id);

  // Delete Task again
  const deletedTask = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(createdTask.id).delete();
  expect(deletedTask.id).toBe(createdTask.id);

  // Ensure task is no longer part of project
  const tasksAfterDeletion = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.get();
  const taskIdsAfterDeletion = tasksAfterDeletion.map(task => task.id);
  expect(taskIdsAfterDeletion).not.toContain(deletedTask.id);
})

test("Update task on project", async () => {
  // Fetch ACTIVE task
  const testTaskBefore = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).get();
  expect(testTaskBefore.status).toBe(TaskStatusEnum.active)

  // Set status to DONE
  testTaskBefore.status = TaskStatusEnum.done;
  const testTaskAfter = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).put(testTaskBefore);
  expect(testTaskAfter.status).toBe(TaskStatusEnum.done);

  // Reset status back to ACTIVE
  testTaskAfter.status = TaskStatusEnum.active;
  const testTaskAfterReset = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).put(testTaskAfter);
  expect(testTaskAfterReset.status).toBe(TaskStatusEnum.active);
})
