import ClockifyAPI, {IDeletable} from "../../../../../../../Api";
import type { UserGroupType } from "../../../../../../../Types/UserGroupType";


export default class User extends ClockifyAPI implements IDeletable<UserGroupType> {

  workspaceId: string;
  userGroupId: string;
  userId: string;

  constructor(apiKey: string, workspaceId: string, userGroupId: string, userId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userGroupId = userGroupId;
    this.userId = userId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}/users/${this.userId}`;
  }

  /**
   * Remove user from group
   */
  delete(): Promise<UserGroupType> {
    return this.axiosDelete<UserGroupType>({});
  }
}
