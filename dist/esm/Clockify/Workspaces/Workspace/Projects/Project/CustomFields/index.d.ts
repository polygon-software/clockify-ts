import ClockifyAPI, { IGettable } from "../../../../../../Api/ClockifyApi";
import type { CustomFieldType } from "../../../../../../Types/CustomFieldType";
import CustomField from "./CustomField";
import CustomFieldsQuery from "../../../../../../Queries/CustomFieldsQuery";
export default class CustomFields extends ClockifyAPI implements IGettable<CustomFieldType[]> {
    workspaceId: string;
    projectId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    withId(customFieldId: string): CustomField;
    get(query: CustomFieldsQuery): Promise<CustomFieldType[]>;
}
