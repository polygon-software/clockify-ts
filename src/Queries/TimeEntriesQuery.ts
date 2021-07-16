import {Query} from "./Query";

export default interface TimeEntriesQuery extends Query {
  /**
   * If provided, time entries will be filtered by description.
   */
  description?: string,
  /**
   * If provided, only time entries that started after the specified datetime will be returned.
   * You send time according to your account's timezone (from Profile Settings)
   * and get response with time in UTC.
   */
  start?: Date,
  /**
   * If provided, only time entries that started before the specified datetime will be returned.
   * Datetime must be in ISO-8601 format (eg. 2019-04-16T05:15:32.998Z").
   * You send time according to your account's timezone (from Profile Settings) and get
   * response with time in UTC.
   */
  end?: Date,
  /**
   * If provided, time entries will be filtered by project.
   */
  project?: string,
  /**
   * If provided, time entries will be filtered by task.
   */
  task?: string,
  /**
   * If provided, time entries will be filtered by tags. This parameter is an array of tag ids.
   */
  tags?: Array<string>,
  /**
   * If provided, only time entries with project will be returned.
   */
  "project-required"?: boolean,
  /**
   * If provided, only time entries with task will be returned.
   */
  "task-required"?: boolean,
  /**
   * If provided, returned timeentry's duration will be rounded to minutes or seconds
   * based on duration format (hh:mm or hh:mm:ss) from workspace settings.
   */
  "consider-duration-format"?: boolean,
  /**
   * If provided, returned timeentry's project,task and tags will be returned in full and not just
   * their ids. Note that if you request hydrated entity version, projectId, taskId and tagIds will
   * be changed to project, task and tags in request response.
   */
  hydrated?: boolean,
  /**
   * If provided, all other filters will be ignored and, if present, currently running
   * time entry will be returned.
   */
  "in-progress"?: boolean,
  page?: number,
  "page-size"?: number,
}
