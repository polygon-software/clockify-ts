type NewTimeEntryType = {
    "start"?: Date;
    "billable"?: boolean;
    "description": string;
    "projectId": string;
    "taskId": string;
    "end"?: Date;
    "tagIds": Array<string>;
    "customFields"?: Array<{
        "customFieldId": string;
        "value": string;
    }>;
};
export { NewTimeEntryType, };
