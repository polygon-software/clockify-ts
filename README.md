# clockify.js - Typescript Wrapper for Clockify API

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=alert_status)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=coverage)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=bugs)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=code_smells)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=security_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)


## Client

### Find clients on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const clients = await clockify.workspace.withId(testWorkspaceId).clients.get();
```

### Add a new client to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const client = await clockify.workspace.withId(testWorkspaceId).clients.post({ name });
```

### Update client

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients--id--put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedClient = await clockify.workspace.withId(testWorkspaceId).clients.withId(clientId).put(client)
```

### Delete client

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients--clientId--delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
const deleted_client = await clockify.workspace.withId(testWorkspaceId).clients.withId(clientId).delete();
```

## Project

### Get all projects on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const projects = await clockify.workspace.withId(testWorkspaceId).projects.get();
```

### Find project by ID

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-get--id)

```typescript
const clockify = new Clockify(clockifyApiKey);
const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).get();
```

### Add a new project to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const project = await clockify.workspace.withId(testWorkspaceId).projects.post({ name });
```

### Update project on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedProject = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).put( project )
```

### Update project estimate

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch-estimate)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedProject = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).estimate.patch( projectEstimate )
```

### Update project memberships

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch)

```typescript
const clockify = new Clockify(clockifyApiKey);
const project = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).memberships.patch(membership);
```

### Update project template

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch--template)

```typescript
const clockify = new Clockify(clockifyApiKey);
const projectNoTemplate = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).template.patch({
    isTemplate: false,
  });
```

### Delete project from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--id--delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
const deletedProject = await clockify.workspace.withId(testWorkspaceId).projects.withId(archivedProjectId).delete();
```

## Tag

### Find tags on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const tags = await clockify.workspace.withId(testWorkspaceId).tags.get();
```

### Add a new tag to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const createdTag = await clockify.workspace.withId(testWorkspaceId).tags.post({ name });
```

### Update tag

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags--tagId--put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedTag = await clockify.workspace.withId(testWorkspaceId).tags.withId(testTagId).put({ name });
```

### Delete tag

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags--tagId--delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
const deletedTag = await clockify.workspace.withId(testWorkspaceId).tags.withId(tagId).delete();
```

## Task

### Find tasks on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const tasks = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.get();
```

### Find task on project by ID

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-get--id)

```typescript
const clockify = new Clockify(clockifyApiKey);
const task = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).get();
```

### Add a new task on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const createdTask = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.post(task);
```

### Update task on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedTask = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(testTaskId).put(task);
```

### Delete task from project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
const deletedTask = await clockify.workspace.withId(testWorkspaceId).projects.withId(testProjectId).tasks.withId(taskId).delete();
```

## Time Entry

### Get your time entries on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const timeEntries = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.get();
```

### Get a specific time entry on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const timeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).get();
```

### Add a new time entry to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const createdTimeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.post(timeEntry);
```

### Add a new time entry for another user on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const createdTimeEntry = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.post(timeEntry);
```

### Stop currently running timer on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-patch)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedTimeEntry = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).timeEntries.patch({ end: new Date() });
```

### Update time entry on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedTimeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).put(updatedTimeEntry);
```

### Mark time entries as invoiced

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--patch--invoiced)

```typescript
const clockify = new Clockify(clockifyApiKey);
const updatedTimeEntry = await clockify.workspace.withId(testWorkspaceId).timeEntries.invoiced.patch(invoiced);
```

### Delete time entry from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
await clockify.workspace.withId(testWorkspaceId).timeEntries.withId(testTimeEntryId).delete();
```

## User

### Get currently logged in user's info

[API Documentation](https://clockify.me/developers-api#operation--v1-user-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const user = await clockify.user.get();
```

### Find all users on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspace--workspaceId--users-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const members = await clockify.workspace.withId(testWorkspaceId).users.get();
```

### Add user to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users-post)

```typescript
const clockify = new Clockify(clockifyApiKey);
const member = await clockify.workspace.withId(testWorkspaceId).users.post({
    email: "test@example.com"
})
```

### Update user's workspace status

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users--userId--put)

```typescript
const clockify = new Clockify(clockifyApiKey);
const inactiveUser = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).put({
    membershipStatus: UserStatusEnum.inactive,
})
```

### Remove user from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users--userId--delete)

```typescript
const clockify = new Clockify(clockifyApiKey);
const removedUser = await clockify.workspace.withId(testWorkspaceId).users.withId(testUserId).delete();
```

## Workspace

### Get all my workspaces

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces-get)

```typescript
const clockify = new Clockify(clockifyApiKey);
const workspaces = await clockify.workspace.get();
```

## Credits

[Open-Source Development by PolygonSoftware, Zurich](https://polygon-software.ch)
