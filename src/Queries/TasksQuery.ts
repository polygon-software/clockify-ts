import {Query} from "./Query";

export default interface TasksQuery extends Query {
  "is-active"?: boolean,
  "name"?: string,
  page?: number,
  "page-size"?: number,
}
