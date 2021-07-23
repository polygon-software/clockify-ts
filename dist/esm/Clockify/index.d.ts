import ClockifyAPI from "../Api/ClockifyApi";
import Users from "./Users";
import Workspace from "./Workspaces";
import Workspaces from "./Workspaces";
export default class Clockify extends ClockifyAPI {
    workspace: Workspace;
    constructor(apiKey: string);
    get user(): Users;
    get workspaces(): Workspaces;
}
