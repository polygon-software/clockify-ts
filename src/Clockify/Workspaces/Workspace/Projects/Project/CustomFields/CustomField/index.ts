import ClockifyAPI, {IDeletable, IPatchable} from "../../../../../../../Api";
import type { CustomFieldType } from "../../../../../../../Types/CustomFieldType";

export default class CustomField extends ClockifyAPI implements IPatchable<CustomFieldType>, IDeletable<CustomFieldType> {

  workspaceId: string;
  projectId: string;
  customFieldId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string, customFieldId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
    this.customFieldId = customFieldId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/custom-fields/${this.customFieldId}`;
  }

  /**
   * Update custom field on project
   */
  patch(data: { defaultValue: string, status: "INACTIVE" | "VISIBLE" | "INVISIBLE" }): Promise<CustomFieldType> {
    return this.axiosPatch<CustomFieldType>(data, {});
  }

  /**
   * Remove custom field from project
   */
  delete(): Promise<CustomFieldType> {
    return this.axiosDelete<CustomFieldType>({});
  }
}
