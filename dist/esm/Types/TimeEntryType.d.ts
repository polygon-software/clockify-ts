type TimeEntryType = {
    "billable": boolean;
    "description": string;
    "id": string;
    "isLocked": boolean;
    "projectId": string;
    "tagIds": Array<string>;
    "taskId": string;
    "timeInterval": {
        "duration": string;
        "end": Date;
        "start": Date;
    };
    "userId": string;
    "workspaceId": string;
    "customFields": Array<{
        "customFieldId": string;
        "timeEntryId": string;
        "value": string;
        "name": string;
    }>;
};
export { TimeEntryType, };
