import ClockifyAPI, { IDeletable, IGettable, IPuttable } from "../../../../../Api/ClockifyApi";
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
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    get customFields(): CustomFields;
    get estimate(): Estimate;
    get memberships(): Memberships;
    get tasks(): Tasks;
    get template(): Template;
    get(): Promise<ProjectType>;
    put(data: UpdateProjectType, query?: UpdateProjectQuery): Promise<ProjectType>;
    delete(): Promise<ProjectType>;
}
