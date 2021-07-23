import ClockifyAPI, {IGettable, IPatchable, IPostable} from "../../../../../../Api/ClockifyApi";
import TimeEntriesQuery from "../../../../../../Queries/TimeEntriesQuery";
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
  get(query: TimeEntriesQuery = {}): Promise<TimeEntryType[]> {
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

