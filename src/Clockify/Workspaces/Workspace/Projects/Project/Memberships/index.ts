import ClockifyAPI, {IPatchable} from "../../../../../../Api/ClockifyApi";
import type { ProjectType } from "../../../../../../Types/ProjectType";
import type { MembershipType } from "../../../../../../Types/MembershipType";

export default class Memberships extends ClockifyAPI implements IPatchable<ProjectType> {

  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/memberships`;
  }

  /**
   * Update project memberships
   */
  patch(data: { memberships: Array<MembershipType> }): Promise<ProjectType> {
    return this.axiosPatch<ProjectType>(data, {});
  }

}
