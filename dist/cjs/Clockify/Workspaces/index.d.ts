import ClockifyAPI, { IGettable } from "../../Api/ClockifyApi";
import Workspace from "./Workspace";
import type { WorkspaceType } from "../../Types/WorkspaceType";
export default class Workspaces extends ClockifyAPI implements IGettable<WorkspaceType[]> {
    resourceSubPath(): string;
    withId(workspaceId: string): Workspace;
    get(): Promise<WorkspaceType[]>;
}
