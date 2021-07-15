import ClockifyAPI, {IGettable} from "../../Api";
import WorkspaceType from "../../Types/WorkspaceType";
import Workspace from "./Workspace";

export default class Workspaces extends ClockifyAPI implements IGettable {

  resourceSubPath(): string {
    return "/workspaces";
  }

  withId(workspaceId: string): Workspace {
    return new Workspace(this._apiKey, workspaceId);
  }

  get(): Promise<Array<WorkspaceType>> {
    return this.axiosGet();
  }

}
