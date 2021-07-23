import ClockifyAPI from "../Api/ClockifyApi";
import Users from "./Users"
import Workspace from "./Workspaces";
import Workspaces from "./Workspaces";

export default class Clockify extends ClockifyAPI {

  workspace: Workspace;

  constructor(apiKey: string) {
    super(apiKey);
    this.workspace = new Workspace(apiKey);
  }

  get user(): Users {
    return new Users(this._apiKey);
  }

  get workspaces(): Workspaces {
    return new Workspaces(this._apiKey);
  }

}
