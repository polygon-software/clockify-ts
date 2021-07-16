import ClockifyAPI, { IPatchable } from "../../../../../../Api";
import type { ProjectType } from "../../../../../../Types/ProjectType";
export default class Template extends ClockifyAPI implements IPatchable<ProjectType> {
    workspaceId: string;
    projectId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    patch(data: {
        isTemplate: boolean;
    }): Promise<ProjectType>;
}
