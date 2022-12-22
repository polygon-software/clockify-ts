import ClockifyAPI from "../../../Api/ClockifyApi";
import Users from "./Users";
import Clients from "./Clients";
import Projects from "./Projects";
import Tags from "./Tags";
import CustomFields from "./CustomFields";
import TimeEntries from "./TimeEntries";
import UserGroups from "./UserGroups";
import Reports from "./Reports";
import Requests from "./Requests";


export default class Workspace extends ClockifyAPI {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}`;
  }

  get clients(): Clients {
    return new Clients(this._apiKey, this.workspaceId);
  }

  get customFields(): CustomFields {
    return new CustomFields(this._apiKey, this.workspaceId);
  }

  get projects(): Projects {
    return new Projects(this._apiKey, this.workspaceId);
  }

  get tags(): Tags {
    return new Tags(this._apiKey, this.workspaceId);
  }

  get timeEntries(): TimeEntries {
    return new TimeEntries(this._apiKey, this.workspaceId);
  }

  get userGroups(): UserGroups {
    return new UserGroups(this._apiKey, this.workspaceId);
  }

  get users(): Users {
    return new Users(this._apiKey, this.workspaceId);
  }

  get reports(): Reports {
    return new Reports(this._apiKey, this.workspaceId);
  }

  get requests(): Requests {
    return new Requests(this._apiKey, this.workspaceId);
  }
}
