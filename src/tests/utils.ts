import {config as dotenvConfig} from "dotenv";

dotenvConfig()

export function randomString() {
  return Math.random().toString(36).substring(7);
}

export function randomInt() {
  return Math.floor(Math.random() * 1000);
}

export const clockifyApiKey = process.env.CLOCKIFY_API_KEY || "NOT_FOUND";
export const testUserId = process.env.TEST_USER_ID || "NOT_FOUND";
export const testUserEmail = process.env.TEST_USER_EMAIL || "NOT_FOUND";
export const testWorkspaceId = process.env.TEST_WORKSPACE_ID || "NOT_FOUND";
export const testClientId = process.env.TEST_CLIENT_ID || "NOT_FOUND";
export const testProjectId = process.env.TEST_PROJECT_ID  || "NOT_FOUND";
export const testTaskId = process.env.TEST_TASK_ID  || "NOT_FOUND";
export const testTagId = process.env.TEST_TAG_ID  || "NOT_FOUND";
export const testTimeEntryId = process.env.TEST_TIME_ENTRY_ID  || "NOT_FOUND";
