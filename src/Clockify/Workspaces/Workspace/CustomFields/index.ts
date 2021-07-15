import ClockifyAPI, {IGettable, Query} from "../../../../Api";
import type { CustomFieldType } from "../../../../Types/CustomFieldType";


export default class CustomFields extends ClockifyAPI implements IGettable<CustomFieldType[]> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/custom-fields`;
  }

  /**
   * Get custom fields on workspace
   */
  get(query: CustomFieldsQuery): Promise<CustomFieldType[]> {
    return this.axiosGet<CustomFieldType[]>(query);
  }
}

interface CustomFieldsQuery extends Query {
  name: string,
  status: "INACTIVE" | "VISIBLE" | "INVISIBLE",
}
