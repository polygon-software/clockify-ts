import ClockifyAPI, {IPatchable} from "../../../../../../Api";
import type { ProjectType } from "../../../../../../Types/ProjectType";

export default class Template extends ClockifyAPI implements IPatchable<ProjectType> {

  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/template`;
  }

  /**
   * Update project template
   */
  patch(data: { isTemplate: boolean }): Promise<ProjectType> {
    return this.axiosPatch<ProjectType>(data, {});
  }

}
