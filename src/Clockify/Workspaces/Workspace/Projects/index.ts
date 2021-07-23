import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import type { ProjectType } from "../../../../Types/ProjectType";
import type { NewProjectType } from "../../../../Types/NewProjectType";
import Project from "./Project";
import ProjectsQuery from "../../../../Queries/ProjectsQuery";

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


