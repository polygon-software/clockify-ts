import ClockifyAPI, { IGettable } from "../../../../Api";
import CustomFieldsQuery from "../../../../Queries/CustomFieldsQuery";
import type { CustomFieldType } from "../../../../Types/CustomFieldType";
export default class CustomFields extends ClockifyAPI implements IGettable<CustomFieldType[]> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    get(query: CustomFieldsQuery): Promise<CustomFieldType[]>;
}
