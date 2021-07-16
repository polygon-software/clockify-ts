import {Query} from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";

export enum UserQueryMembershipsEnum {
  workspace = "WORKSPACE",
  project = "PROJECT",
  usergroup = "USERGROUP",
  all = "ALL",
}
export enum UserQueryStatusEnum {
  pending = "PENDING",
  active = "ACTIVE",
  declined = "DECLINED",
  inactive = "INACTIVE",
}
export default interface UsersQuery extends Query, MultiItemsQuery {
  "memberships"?: UserQueryMembershipsEnum,
  "email"?: string,
  "projectId"?: string,
  "name"?: string,
  "status"?: UserQueryStatusEnum,
  "includeRoles"?: boolean,
}
