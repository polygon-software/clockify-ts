import Clockify from "../src/Clockify";
import {clockifyApiKey, testWorkspaceId} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Get all my workspaces", async () => {
  const workspaces = await clockify.workspace.get();
  expect(workspaces.length).toBeGreaterThanOrEqual(1);
  const workspaceIds = workspaces.map(workspace => workspace.id);
  expect(workspaceIds).toContain(testWorkspaceId);
})
