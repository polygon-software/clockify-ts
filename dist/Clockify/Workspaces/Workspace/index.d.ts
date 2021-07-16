import ClockifyAPI from "../../../Api";
import Users from "./Users";
import Clients from "./Clients";
import Projects from "./Projects";
import Tags from "./Tags";
import CustomFields from "./CustomFields";
import TimeEntries from "./TimeEntries";
import UserGroups from "./UserGroups";
export default class Workspace extends ClockifyAPI {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    get clients(): Clients;
    get customFields(): CustomFields;
    get projects(): Projects;
    get tags(): Tags;
    get timeEntries(): TimeEntries;
    get userGroups(): UserGroups;
    get users(): Users;
}
