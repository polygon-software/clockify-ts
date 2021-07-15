import Clockify from "../Clockify";
import {clockifyApiKey, randomString, testTagId, testWorkspaceId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Find tags on workspace", async () => {
  const tags = await clockify.workspace.withId(testWorkspaceId).tags.get();
  expect(tags.length).toBeGreaterThanOrEqual(1);
  const tag_ids = tags.map(tag => tag.id);
  expect(tag_ids).toContain(testTagId);
})

test("Add a new tag to workspace && Delete tag", async () => {
  // Create a new Tag
  const name = `Test Tag: ${randomString()}`;
  const createdTag = await clockify.workspace.withId(testWorkspaceId).tags.post({ name });
  expect(createdTag.workspaceId).toBe(testWorkspaceId);
  expect(createdTag.name).toBe(name);

  // Ensure Tag is in Workspace
  const tags = await clockify.workspace.withId(testWorkspaceId).tags.get();
  const tagIds = tags.map(tag => tag.id);
  expect(tagIds).toContain(createdTag.id);

  // Delete tag
  const deletedTag = await clockify.workspace.withId(testWorkspaceId).tags.withId(createdTag.id).delete();
  expect(deletedTag.id).toBe(createdTag.id);

  // Ensure Tag is no longer in Workspace
  const tagsAfterDeletion = await clockify.workspace.withId(testWorkspaceId).tags.get();
  const tagIdsAfterDeletion = tagsAfterDeletion.map(tag => tag.id);
  expect(tagIdsAfterDeletion).not.toContain(createdTag.id);
})

test("Update tag", async () => {
  const name = `Test Tag: ${randomString()}`;
  const tag = await clockify.workspace.withId(testWorkspaceId).tags.withId(testTagId).put({ name });
  expect(tag.name).toBe(name);
})
