import Clockify from "./../Clockify";
import {clockifyApiKey, testWorkspaceId, testUserEmail, testUserId} from "./utils";
import {UserStatusEnum} from "../Types/UserType";

const clockify = new Clockify(clockifyApiKey);

test("Get currently logged in user's info", async () => {
  const user = await clockify.user.get();
  expect(user.id).toBe(testUserId);
})

test("Find all users on workspace", async () => {
  const members = await clockify.workspace.withId(testWorkspaceId).users.get({
    email: testUserEmail
  });
  expect(members.length).toBe(1);
  expect(members[0].id).toBe(testUserId);
})

test.skip("Add user to workspace", async () => {
  const member = await clockify.workspace.withId(testWorkspaceId).users.post({
    email: "test@example.com"
  })
  expect(member.id).toBeDefined();
})

test.skip("Update user's workspace status", async () => {
  const inactiveUser = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).put({
    membershipStatus: UserStatusEnum.inactive,
  })
})

test.skip("Remove user from workspace", async () => {
  const deletedUser = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).delete();
})
