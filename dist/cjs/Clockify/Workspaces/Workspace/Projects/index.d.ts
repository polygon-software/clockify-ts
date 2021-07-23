import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import type { ProjectType } from "../../../../Types/ProjectType";
import type { NewProjectType } from "../../../../Types/NewProjectType";
import Project from "./Project";
import ProjectsQuery from "../../../../Queries/ProjectsQuery";
export default class Projects extends ClockifyAPI implements IGettable<ProjectType[]>, IPostable<ProjectType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(projectId: string): Project;
    get(query?: ProjectsQuery): Promise<ProjectType[]>;
    post(data: NewProjectType): Promise<ProjectType>;
}
