import ClockifyAPI, { IDeletable, IPatchable } from "../../../../../../../Api";
import type { CustomFieldType } from "../../../../../../../Types/CustomFieldType";
export default class CustomField extends ClockifyAPI implements IPatchable<CustomFieldType>, IDeletable<CustomFieldType> {
    workspaceId: string;
    projectId: string;
    customFieldId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string, customFieldId: string);
    resourceSubPath(): string;
    patch(data: {
        defaultValue: string;
        status: "INACTIVE" | "VISIBLE" | "INVISIBLE";
    }): Promise<CustomFieldType>;
    delete(): Promise<CustomFieldType>;
}
