import ClockifyAPI, {IDeletable, IGettable, IPuttable} from "../../../../../Api";
import type { ProjectType } from "../../../../../Types/ProjectType";
import CustomFields from "./CustomFields";
import Estimate from "./Estimate";
import Memberships from "./Memberships";
import Tasks from "./Tasks";
import Template from "./Template";
import type { UpdateProjectType } from "../../../../../Types/UpdateProjectType";
import UpdateProjectQuery from "../../../../../Queries/UpdateProjectQuery";

export default class Project extends ClockifyAPI implements IGettable<ProjectType>, IPuttable<ProjectType>, IDeletable<ProjectType> {

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
    return this.axiosGet<ProjectType>({});
  }

  /**
   * Update project on workspace
   */
  put(data: UpdateProjectType, query: UpdateProjectQuery = {}): Promise<ProjectType> {
    return this.axiosPut<ProjectType>(data, query);
  }

  /**
   * Delete project from workspace
   */
  delete(): Promise<ProjectType> {
    return this.axiosDelete<ProjectType>({});
  }

}
