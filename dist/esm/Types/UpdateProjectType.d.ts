type UpdateProjectType = {
    "name": string;
    "clientId"?: string;
    "isPublic"?: boolean;
    "hourlyRate"?: {
        "amount": number;
    };
    "color"?: string;
    "note"?: string;
    "billable"?: boolean;
    "public"?: boolean;
    archived: boolean;
};
export { UpdateProjectType, };
