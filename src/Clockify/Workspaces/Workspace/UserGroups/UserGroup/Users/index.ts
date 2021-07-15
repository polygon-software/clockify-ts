import ClockifyAPI, {IPostable} from "../../../../../../Api";
import User from "./User";
import type { UserGroupType } from "../../../../../../Types/UserGroupType";


export default class Users extends ClockifyAPI implements IPostable<UserGroupType> {

  workspaceId: string;
  userGroupId: string;

  constructor(apiKey: string, workspaceId: string, userGroupId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userGroupId = userGroupId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}/users`;
  }

  withId(userId: string): User {
    return new User(this._apiKey, this.workspaceId, this.userGroupId, userId);
  }

  /**
   * Add users to group
   */
  post(data: { userId: string }): Promise<UserGroupType> {
    return this.axiosPost<UserGroupType>(data, {});
  }
}
