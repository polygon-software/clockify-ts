import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api/ClockifyApi";
import Users from "./Users";
import type { UserGroupType } from "../../../../../Types/UserGroupType";


export default class UserGroup extends ClockifyAPI implements IPuttable<UserGroupType>, IDeletable<UserGroupType> {

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

  get users(): Users {
    return new Users(this._apiKey, this.workspaceId, this.userGroupId);
  }

  /**
   * Update group name
   */
  put(data: { name: string }): Promise<UserGroupType> {
    return this.axiosPut<UserGroupType>(data, {});
  }

  /**
   * Delete group
   */
  delete(): Promise<UserGroupType> {
    return this.axiosDelete<UserGroupType>({});
  }


}
