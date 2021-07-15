import ClockifyAPI, {IGettable, IPatchable, IPostable, Query} from "../../../../../../Api";
import type { TimeEntryType } from "../../../../../../Types/TimeEntryType";
import type { NewTimeEntryType } from "../../../../../../Types/NewTimeEntryType";

export default class TimeEntries extends ClockifyAPI implements IGettable<TimeEntryType[]>, IPostable<TimeEntryType>, IPatchable<TimeEntryType> {

  workspaceId: string;
  userId: string;

  constructor(apiKey: string, workspaceId: string, userId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.userId = userId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/user/${this.userId}/time-entries`;
  }

  /**
   * Gets a time entry for specified user on workspace.
   */
  get(query: TimeEntryQuery = {}): Promise<TimeEntryType[]> {
    return this.axiosGet<TimeEntryType[]>(query);
  }

  /**
   * Adding time for others is a paid feature. This API endpoint works only for workspaces that have
   * an active paid subscription.
   * You specify for which user you're adding time in the request's POST path.
   * If you leave out end time, you'll start a timer for that person. To stop the timer,
   * you'll have to use the "PUT /workspaces/{workspaceId}/time-entries/{timeEntryId}/end" PATH
   * (request example: {"end":"2019-02-07T14:00:07.000Z"}
   */
  post(data: NewTimeEntryType): Promise<TimeEntryType> {
    return this.axiosPost<TimeEntryType>(data, {});
  }

  /**
   * Admins can stop someone else's running timers on paid workspaces (Add time for others feature).
   * If workspace has a required field enabled (eg. the Timesheet is enabled and project is a
   * required field as a result), you won't be able to stop the timer until you fill in the
   * required field(s). You'll simply get "Entity not created" message.
   */
  patch(data: { end: Date }): Promise<TimeEntryType> {
    return this.axiosPatch<TimeEntryType>(data);
  }
}


interface TimeEntryQuery extends Query {
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
