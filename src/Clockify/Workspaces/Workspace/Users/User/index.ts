import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api";
import UserType from "../../../../../Types/UserType";
import TimeEntries from "./TimeEntries";


export default class User extends ClockifyAPI implements IPuttable, IDeletable {

  workspaceId: string;
  userId: string;

  constructor(apiKey: string, workspaceId: string, userId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userId = userId;
  }

  get timeEntries(): TimeEntries {
    return new TimeEntries(this._apiKey, this.workspaceId, this.userId);
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/users/${this.userId}`;
  }

  /**
   * Update user's workspace status
   */
  put(data: { membershipStatus: "ACTIVE" | "INACTIVE" }) {
    return this.axiosPut(data, {});
  }

  /**
   * Remove user from workspace
   */
  delete() {
    return this.axiosDelete({});
  }
}
