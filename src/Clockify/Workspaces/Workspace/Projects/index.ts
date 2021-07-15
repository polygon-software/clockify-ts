import ClockifyAPI, {
  IGettable,
  IPostable,
  Query
} from "../../../../Api";
import type { ProjectType } from "../../../../Types/ProjectType";
import type { NewProjectType } from "../../../../Types/NewProjectType";
import Project from "./Project";

export default class Projects extends ClockifyAPI implements  IGettable<ProjectType[]>, IPostable<ProjectType> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects`;
  }

  withId(projectId: string): Project {
    return new Project(this._apiKey, this.workspaceId, projectId);
  }

  /**
   * Get all projects on workspace
   * Find project by ID
   */
  get(query: ProjectsQuery = {}): Promise<ProjectType[]> {
    return this.axiosGet<ProjectType[]>(query);
  }

  /**
   * Add a new project to workspace
   */
  post(data: NewProjectType): Promise<ProjectType> {
    return this.axiosPost<ProjectType>(data, {});
  }
}

interface ProjectsQuery extends Query {
  /**
   * If true, you'll get only archived projects. If false, you'll get only active projects.
   */
  archived?: boolean,
  name?: string,
  page?: number,
  "page-size"?: number,
  /**
   * If provided, projects will be filtered by billable status.
   */
  billable?: boolean,
  /**
   * If provided, projects will be filtered by client ID(s).
   */
  clients?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have a client.
   */
  "contains-client"?: boolean,
  "client-status"?: "ACTIVE" | "ARCHIVED",
  /**
   * If provided, projects will be filtered by user ID(s) who have access.
   */
  users?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have users.
   */
  "contains-users"?: boolean,
  "user-status"?: "ACTIVE" | "INACTIVE",
  /**
   * If provided, projects will be filtered by whether they are used as a template.
   */
  "is-template"?: boolean,
  "sort-column"?: "NAME",
  "sort-order"?: "ASCENDING" | "DESCENDING",
}
