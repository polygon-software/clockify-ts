import ClockifyAPI, { IPatchable } from "../../../../../../Api/ClockifyApi";
import type { EstimateType } from "../../../../../../Types/EstimateType";
import type { ProjectType } from "../../../../../../Types/ProjectType";
export default class Estimate extends ClockifyAPI implements IPatchable<ProjectType> {
    workspaceId: string;
    projectId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    patch(data: EstimateType): Promise<ProjectType>;
}
