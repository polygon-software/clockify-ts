import {Query} from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";

export enum ProjectsQueryClientStatusEnum {
  active = "ACTIVE",
  archived = "ARCHIVED",
}
export enum ProjectsQueryUserStatusEnum {
  active = "ACTIVE",
  inactive = "INACTIVE",
}
export default interface ProjectsQuery extends Query, MultiItemsQuery {
  /**
   * If true, you'll get only archived projects. If false, you'll get only active projects.
   */
  archived?: boolean,
  name?: string,
  /**
   * If provided, projects will be filtered by billable status.
   */
  billable?: boolean,
  /**
   * If provided, projects will be filtered by client ID(s).
   */
  clients?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have a client.
   */
  "contains-client"?: boolean,
  "client-status"?: ProjectsQueryClientStatusEnum,
  /**
   * If provided, projects will be filtered by user ID(s) who have access.
   */
  users?: Array<string>,
  /**
   * If provided, projects will be filtered by whether they have users.
   */
  "contains-users"?: boolean,
  "user-status"?: ProjectsQueryUserStatusEnum,
  /**
   * If provided, projects will be filtered by whether they are used as a template.
   */
  "is-template"?: boolean,
}
