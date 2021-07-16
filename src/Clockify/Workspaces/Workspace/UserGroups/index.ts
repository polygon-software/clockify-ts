import ClockifyAPI, {IGettable, IPostable} from "../../../../Api";
import UserGroup from "./UserGroup";
import UserGroupQuery from "../../../../Queries/UserGroupQuery";
import type { UserGroupType } from "../../../../Types/UserGroupType";


export default class UserGroups extends ClockifyAPI implements IGettable<UserGroupType[]>, IPostable<UserGroupType> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user-groups`;
  }

  withId(userGroupId: string): UserGroup {
    return new UserGroup(this._apiKey, this.workspaceId, userGroupId);
  }

  /**
   * Find all groups on workspace
   */
  get(query: UserGroupQuery): Promise<UserGroupType[]> {
    return this.axiosGet<UserGroupType[]>(query);
  }

  /**
   * Add a new group to workspace
   */
  post(data: { name: string }): Promise<UserGroupType> {
    return this.axiosPost<UserGroupType>(data);
  }

}
