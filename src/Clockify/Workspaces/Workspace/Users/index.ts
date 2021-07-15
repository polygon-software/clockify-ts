import ClockifyAPI, {
  IDeletable,
  IGettable,
  IPostable,
  IPuttable,
  Query
} from "../../../../Api";
import MemberType from "../../../../Types/MemberType";
import UserType from "../../../../Types/UserType";
import {NewUserType} from "../../../../Types/NewUserType";
import User from "./User";

interface UserQuery extends Query {
  "page"?: number,
  "page-size"?: number,
  "memberships"?: "WORKSPACE" | "PROJECT" | "USERGROUP" | "ALL",
  "email"?: string,
  "projectId"?: string,
  "name"?: string,
  "status"?: "PENDING" | "ACTIVE" | "DECLINED" | "INACTIVE",
  "sort-column"?: "EMAIL" | "NAME" | "HOURLYRATE",
  "sort-order"?: "ASCENDING" | "DESCENDING",
  "includeRoles"?: boolean,
}

export default class Users extends ClockifyAPI implements IGettable, IPostable {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  withId(userId: string): User {
    return new User(this._apiKey, this.workspaceId, userId);
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/users`;
  }

  /**
   * Find all users on workspace
   */
  get(query: UserQuery): Promise<Array<MemberType>> {
    return this.axiosGet(query);
  }

  /**
   * Add user to workspace
   * You can add users to a workspace via API only if that workspace has a paid subscription.
   * If the workspace has a paid subscription, you can add as many users as you want but you
   * are limited by the number of paid user seats on that workspace.
   */
  post(data: NewUserType): Promise<UserType> {
    return this.axiosPost(data, {});
  }

}
