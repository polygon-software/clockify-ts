import ClockifyAPI, {IPostable} from "../../../../../../Api";
import UserGroupType from "../../../../../../Types/UserGroupType";
import User from "./User";


export default class Users extends ClockifyAPI implements IPostable {

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
    return this.axiosPost(data, {});
  }
}
