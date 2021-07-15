import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api";
import TimeEntries from "./TimeEntries";
import {UserType} from "../../../../../Types/UserType";


export default class User extends ClockifyAPI implements IPuttable<UserType>, IDeletable<null> {

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
  put(data: { membershipStatus: "ACTIVE" | "INACTIVE" }): Promise<UserType> {
    return this.axiosPut<UserType>(data, {});
  }

  /**
   * Remove user from workspace
   */
  delete(): Promise<null> {
    return this.axiosDelete<null>({});
  }
}
