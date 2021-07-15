import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api";
import UserGroupType from "../../../../../Types/UserGroupType";
import Users from "./Users";


export default class UserGroup extends ClockifyAPI implements IPuttable, IDeletable {

  workspaceId: string;
  userGroupId: string;

  constructor(apiKey: string, workspaceId: string, userGroupId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userGroupId = userGroupId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups/${this.userGroupId}`;
  }

  get users() {
    return new Users(this._apiKey, this.workspaceId, this.userGroupId);
  }

  /**
   * Update group name
   */
  put(data: { name: string }): Promise<UserGroupType> {
    return this.axiosPut(data, {});
  }

  /**
   * Delete group
   */
  delete(): Promise<UserGroupType> {
    return this.axiosDelete({});
  }


}
