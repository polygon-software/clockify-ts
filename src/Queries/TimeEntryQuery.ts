import {Query} from "./Query";

export default interface TimeEntryQuery extends Query {
  /**
   * If provided, returned timeentry's duration will be rounded to minutes or seconds
   * based on duration format (hh:mm or hh:mm:ss) from workspace settings.
   */
  "consider-duration-format"?: boolean,
  /**
   * If provided, returned timeentry's project,task and tags will be returned in full and not
   * just their ids. Note that if you request hydrated entity version, projectId, taskId
   * and tagIds will be changed to project, task and tags in request response.
   */
  hydrated?: boolean,
}
