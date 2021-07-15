import ClockifyAPI, {IDeletable, IGettable, IPostable, IPuttable, Query} from "../../../../../Api";
import ProjectType from "../../../../../Types/ProjectType";
import NewProjectType from "../../../../../Types/NewProjectType";
import CustomField from "./CustomFields/CustomField";
import CustomFields from "./CustomFields";
import Estimate from "./Estimate";
import Memberships from "./Memberships";
import Tasks from "./Tasks";
import Template from "./Template";
import UpdateProjectType from "../../../../../Types/UpdateProjectType";

export default class Project extends ClockifyAPI implements IGettable, IPuttable, IDeletable {

  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}`;
  }

  get customFields(): CustomFields {
    return new CustomFields(this._apiKey, this.workspaceId, this.projectId);
  }

  get estimate(): Estimate {
    return new Estimate(this._apiKey, this.workspaceId, this.projectId);
  }

  get memberships(): Memberships {
    return new Memberships(this._apiKey, this.workspaceId, this.projectId);
  }

  get tasks(): Tasks {
    return new Tasks(this._apiKey, this.workspaceId, this.projectId);
  }

  get template(): Template {
    return new Template(this._apiKey, this.workspaceId, this.projectId);
  }

  /**
   * Get all projects on workspace
   * Find project by ID
   */
  get(): Promise<ProjectType> {
    return this.axiosGet({});
  }

  /**
   * Update project on workspace
   */
  put(data: UpdateProjectType, query: UpdateProjectQuery = {}): Promise<ProjectType> {
    return this.axiosPut(data, query);
  }

  /**
   * Delete project from workspace
   */
  delete(): Promise<ProjectType> {
    return this.axiosDelete({});
  }

}

interface UpdateProjectQuery extends Query {
  /**
   * MANUAL type enables one fixed estimate for the whole project. AUTO type enables task-based project estimate. If AUTO is enabled, estimate duration doesn't matter.
   */
  "estimate-type"?: "MANUAL" | "AUTO",
}
