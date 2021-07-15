import Clockify from "../Clockify";
import {clockifyApiKey, testWorkspaceId, testClientId, randomString} from "./utils";

const clockify = new Clockify(clockifyApiKey);

test("Find clients on workspace", async () => {
  const clients = await clockify.workspace.withId(testWorkspaceId).clients.get();
  expect(clients.length).toBeGreaterThanOrEqual(1);
  const client_ids = clients.map(client => client.id);
  expect(client_ids).toContain(testClientId);
})

test("Add a new client to workspace & Delete client", async () => {
  const name = `Temporary Client: ${randomString()}`;

  // Create new client
  const client = await clockify.workspace.withId(testWorkspaceId).clients.post({ name });
  expect(client.name).toBe(name);

  // Check if client is in workspace now
  const clients = await clockify.workspace.withId(testWorkspaceId).clients.get();
  expect(clients).toContainEqual(client);

  // Delete client
  const deleted_client = await clockify.workspace.withId(testWorkspaceId).clients.withId(client.id).delete();
  expect(deleted_client.id).toBe(client.id);

  // Check if client is no longer part of workspace
  const clientsRefetched = await clockify.workspace.withId(testWorkspaceId).clients.get();
  expect(clientsRefetched).not.toContainEqual(client);
})

test("Update a clients name", async () => {
  const name = `Temporary Client: ${randomString()}`;

  // Fetch first client
  const clients = await clockify.workspace.withId(testWorkspaceId).clients.get();
  expect(clients.length).toBeGreaterThanOrEqual(1);
  const client = clients[0];
  expect(client.name).not.toBe(name);

  // Change clients Name
  client.name = name;
  expect(client.name).toBe(name);
  const updatedClient = await clockify.workspace.withId(testWorkspaceId).clients.withId(client.id).put(client)

  // Check if clients name has changed
  expect(updatedClient.name).toBe(name);
})

