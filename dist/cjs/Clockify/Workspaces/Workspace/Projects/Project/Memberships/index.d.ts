import ClockifyAPI, { IPatchable } from "../../../../../../Api";
import type { ProjectType } from "../../../../../../Types/ProjectType";
import type { MembershipType } from "../../../../../../Types/MembershipType";
export default class Memberships extends ClockifyAPI implements IPatchable<ProjectType> {
    workspaceId: string;
    projectId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    patch(data: {
        memberships: Array<MembershipType>;
    }): Promise<ProjectType>;
}
