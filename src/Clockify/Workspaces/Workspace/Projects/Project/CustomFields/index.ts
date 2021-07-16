import ClockifyAPI, {IGettable} from "../../../../../../Api";
import type { CustomFieldType } from "../../../../../../Types/CustomFieldType";
import CustomField from "./CustomField";
import CustomFieldsQuery from "../../../../../../Queries/CustomFieldsQuery";

export default class CustomFields extends ClockifyAPI implements IGettable<CustomFieldType[]> {

  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/custom-fields`;
  }

  withId(customFieldId: string): CustomField {
    return new CustomField(this._apiKey, this.workspaceId, this.projectId, customFieldId);
  }

  /**
   * Get custom fields on workspace
   */
  get(query: CustomFieldsQuery): Promise<CustomFieldType[]> {
    return this.axiosGet(query);
  }
}

