import ClockifyAPI, {IGettable, Query} from "../../../../../../Api";
import CustomFieldType from "../../../../../../Types/CustomFieldType";
import CustomField from "./CustomField";

export default class CustomFields extends ClockifyAPI implements IGettable {

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

  withId(customFieldId: string) {
    return new CustomField(this._apiKey, this.workspaceId, this.projectId, customFieldId);
  }

  /**
   * Get custom fields on workspace
   */
  get(query: CustomFieldsQuery): Promise<Array<CustomFieldType>> {
    return this.axiosGet(query);
  }
}

interface CustomFieldsQuery extends Query {
  name: string,
  status: "INACTIVE" | "VISIBLE" | "INVISIBLE",
}
