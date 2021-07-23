import ClockifyAPI, {IGettable} from "../../Api/ClockifyApi";
import Workspace from "./Workspace";
import type { WorkspaceType } from "../../Types/WorkspaceType";

export default class Workspaces extends ClockifyAPI implements IGettable<WorkspaceType[]> {

  resourceSubPath(): string {
    return "/workspaces";
  }

  withId(workspaceId: string): Workspace {
    return new Workspace(this._apiKey, workspaceId);
  }

  get(): Promise<WorkspaceType[]> {
    return this.axiosGet<WorkspaceType[]>();
  }

}
