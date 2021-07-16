# Clockify-ts - Typescript Wrapper for Clockify API

<p align="center">
  <img width="300" height="200" src="https://clockify.me//assets/images/clockify-logo.svg">
</p>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=alert_status)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=coverage)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=bugs)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=code_smells)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=polygon-software_clockify.js&metric=security_rating)](https://sonarcloud.io/dashboard?id=polygon-software_clockify.js)

## Introduction

Clockify-ts is an unofficial wrapper for the clockify API written in TypeScript.
By using Clockify's REST-based API, you can push and pull data to and from Clockify, and integrate it with other systems.

You can install this package using [NPM]()!

```
$ npm install clockify-ts
```

And import the package using require/import syntax:

```typescript
const Clockify = require("clockify-ts");
// Alternatively
import Clockify from "clockify-ts";
```

### Authentication

All communication with the Clockify API needs to be authenticated using a Auth-Token. This token can be generated
in the [User Settings](https://clockify.me/user/settings) page and needs to be passed to the clockify instance. 

If your workspace is on a subdomain (eg. something.clockify.me), you'll need to generate a new API key in your Profile Settings that will work just for that workspace.

If you're a self-hosted user, you'll have to use a different API base endpoint: "https://yourcustomdomain.com/api" and "https://yourdomain.com/reports" (you can find exact endpoints when you go to "https://youdomain.com/web/boot").

```typescript
import Clockify from "clockify-ts";

const clockifyApiKey = "YOUR-API-KEY";
const clockify = new Clockify("clockifyApiKey");
```

### Principles

Clockify-ts wrapps all base API Endpoints from clockify. This is best illustrated using an example:

```typescript
import Clockify from "clockify-ts";

const clockify = new Clockify("clockifyApiKey");

// Endpoint: GET /workspaces/{workspaceId}/projects
const projects = await clockify.workspace.withId("workspaceId").projects.get();
```

There are type definitions available for all return values and all possible query objects. The type definitions can be
imported directly from the clockify-ts package:

```typescript
import Clockify from "clockify-ts";
import type { ProjectType } from "clockify-ts";

const project: ProjectType = {
    id: "xxx"
}
```

### Features

The following clockify API features are already well implemented and tested. 

#### Base Endpoints 

- Client :heavy_check_mark:
- Project :heavy_check_mark:
- Tag :heavy_check_mark:
- Task :heavy_check_mark:
- Time Entry :heavy_check_mark:
- User :heavy_check_mark:
- Group: :x:
- Workspace :heavy_check_mark:
- Custom Fields :heavy_check_mark:

#### Report Endpoints

- Reports: :heavy_check_mark:
- Shared Reports: :heavy_check_mark:

# Examples / Documentation

## Client

### Find clients on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients-get)

```typescript
import Clockify from "clockify-ts";
import type { ClientType } from "clockify-ts";

const clockify = new Clockify("clockifyApiKey");
const clients: ClientType[] = await clockify.workspace.withId("workspaceId").clients.get();
```

Or with a more complex query:

```typescript
import Clockify, { ClientsQuery } from "clockify-ts";
import type { ClientType } from "clockify-ts";

const clockify = new Clockify("clockifyApiKey");
const query: ClientsQuery = {
    name: "Project Name",
    page: 1,
}
const clients: ClientType[] = await clockify.workspace.withId("workspaceId").clients.get(query);
```

### Add a new client to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients-post)

```typescript
import Clockify from "clockify-ts";
import type { ClientType } from "clockify-ts";

const clockify = new Clockify("clockifyApiKey");
const client: ClientType = await clockify.workspace.withId("workspaceId").clients.post({ name: "name" });
```

### Update client

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients--id--put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedClient = await clockify.workspace.withId("workspaceId").clients.withId("clientId").put(client)
```

### Delete client

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--clients--clientId--delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
const deleted_client = await clockify.workspace.withId("workspaceId").clients.withId("clientId").delete();
```

## Project

### Get all projects on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const projects = await clockify.workspace.withId("workspaceId").projects.get();
```

### Find project by ID

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-get--id)

```typescript
const clockify = new Clockify("clockifyApiKey");
const project = await clockify.workspace.withId("workspaceId").projects.withId("projectId").get();
```

### Add a new project to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const project = await clockify.workspace.withId("workspaceId").projects.post({ name });
```

### Update project on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedProject = await clockify.workspace.withId("workspaceId").projects.withId("projectId").put( project )
```

### Update project estimate

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch-estimate)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedProject = await clockify.workspace.withId("workspaceId").projects.withId("projectId").estimate.patch(projectEstimate)
```

### Update project memberships

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch)

```typescript
const clockify = new Clockify("clockifyApiKey");
const project = await clockify.workspace.withId("workspaceId").projects.withId("projectId").memberships.patch(membership);
```

### Update project template

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects-patch--template)

```typescript
const clockify = new Clockify("clockifyApiKey");
const projectNoTemplate = await clockify.workspace.withId("workspaceId").projects.withId("projectId").template.patch({
    isTemplate: false,
  });
```

### Delete project from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--id--delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
const deletedProject = await clockify.workspace.withId("workspaceId").projects.withId("archivedProjectId").delete();
```

## Tag

### Find tags on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const tags = await clockify.workspace.withId("workspaceId").tags.get();
```

### Add a new tag to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const createdTag = await clockify.workspace.withId("workspaceId").tags.post({ name });
```

### Update tag

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags--tagId--put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedTag = await clockify.workspace.withId("workspaceId").tags.withId("tagId").put({ name });
```

### Delete tag

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--tags--tagId--delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
const deletedTag = await clockify.workspace.withId("workspaceId").tags.withId("tagId").delete();
```

## Task

### Find tasks on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const tasks = await clockify.workspace.withId("workspaceId").projects.withId("projectId").tasks.get();
```

### Find task on project by ID

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-get--id)

```typescript
const clockify = new Clockify("clockifyApiKey");
const task = await clockify.workspace.withId("workspaceId").projects.withId("projectId").tasks.withId("taskId").get();
```

### Add a new task on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const createdTask = await clockify.workspace.withId("workspaceId").projects.withId("projectId").tasks.post(task);
```

### Update task on project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedTask = await clockify.workspace.withId("workspaceId").projects.withId("projectId").tasks.withId("taskId").put(task);
```

### Delete task from project

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--projects--projectId--tasks-delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
const deletedTask = await clockify.workspace.withId("workspaceId").projects.withId("projectId").tasks.withId("taskId").delete();
```

## Time Entry

### Get your time entries on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const timeEntries = await clockify.workspace.withId("workspaceId").users.withId("userId").timeEntries.get();
```

### Get a specific time entry on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const timeEntry = await clockify.workspace.withId("workspaceId").timeEntries.withId("timeEntryId").get();
```

### Add a new time entry to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const createdTimeEntry = await clockify.workspace.withId("workspaceId").timeEntries.post(timeEntry);
```

### Add a new time entry for another user on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const createdTimeEntry = await clockify.workspace.withId("workspaceId").users.withId("userId").timeEntries.post(timeEntry);
```

### Stop currently running timer on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--user--userId--time-entries-patch)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedTimeEntry = await clockify.workspace.withId("workspaceId").users.withId("userId").timeEntries.patch({ end: new Date() });
```

### Update time entry on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedTimeEntry = await clockify.workspace.withId("workspaceId").timeEntries.withId("timeEntryId").put(updatedTimeEntry);
```

### Mark time entries as invoiced

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--patch--invoiced)

```typescript
const clockify = new Clockify("clockifyApiKey");
const updatedTimeEntry = await clockify.workspace.withId("workspaceId").timeEntries.invoiced.patch(invoiced);
```

### Delete time entry from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--time-entries--id--delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
await clockify.workspace.withId("workspaceId").timeEntries.withId("timeEntryId").delete();
```

## User

### Get currently logged in user's info

[API Documentation](https://clockify.me/developers-api#operation--v1-user-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const user = await clockify.user.get();
```

### Find all users on workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspace--workspaceId--users-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const members = await clockify.workspace.withId("workspaceId").users.get();
```

### Add user to workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users-post)

```typescript
const clockify = new Clockify("clockifyApiKey");
const member = await clockify.workspace.withId("workspaceId").users.post({
    email: "test@example.com"
})
```

### Update user's workspace status

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users--userId--put)

```typescript
const clockify = new Clockify("clockifyApiKey");
const inactiveUser = await clockify.workspace.withId("workspaceId").users.withId("userId").put({
    membershipStatus: UserStatusEnum.inactive,
})
```

### Remove user from workspace

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces--workspaceId--users--userId--delete)

```typescript
const clockify = new Clockify("clockifyApiKey");
const removedUser = await clockify.workspace.withId("workspaceId").users.withId("userId").delete();
```

## Workspace

### Get all my workspaces

[API Documentation](https://clockify.me/developers-api#operation--v1-workspaces-get)

```typescript
const clockify = new Clockify("clockifyApiKey");
const workspaces = await clockify.workspace.get();
```


## Query, Types and Enums

Here you find an exhaustive list of all Types, Queries and Enums you can import form "clockify-ts".

### Available Types
- ClientType
- CustomFieldType
- EntityType
- EstimateType
- MembershipType
- MemberType
- NewClientType
- NewProjectType
- NewTaskType
- NewTimeEntryType
- NewUserType
- ProjectType
- RoleType
- TagType
- TaskType
- TimeEntryType
- UpdateClientType
- UpdateProjectType
- UserGroupType
- UserType
- WorkspaceType

### Available Queries
- ClientsQuery
- CustomFieldsQuery
- ProjectsQuery
- Query
- TagsQuery
- TasksQuery
- TimeEntriesQuery
- TimeEntryQuery
- UpdateClientQuery
- UpdateProjectQuery
- UserGroupQuery
- UsersQuery

### Available Enums

#### Type Enums
- CustomFieldTypeEnum,
- CustomFieldStatusEnum,
- CustomFieldProjectDefaultValuesStatusEnum,
- TimeEstimateTypeEnum,
- BudgetEstimateTypeEnum,
- TimeEstimateResetOptionEnum,
- BudgetEstimateResetOptionEnum,
- MembershipStatusEnum,
- MembershipTypeEnum,
- TaskStatusEnum,
- RoleEnum,


#### Query Enums
- CustomFieldQueryStatusEnum,
- QuerySortOrderEnum,
- ProjectsQueryClientStatusEnum,
- ProjectsQueryUserStatusEnum,
- UpdateProjectQueryEstimateTypeEnum,
- UserQueryMembershipsEnum,
- UserQueryStatusEnum,

## Credits

[Open-Source Development by PolygonSoftware, Zurich](https://polygon-software.ch)
