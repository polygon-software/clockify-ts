import ClockifyAPI, {IPostable} from "../../../../Api";
import TimeEntryType from "../../../../Types/TimeEntryType";
import TimeEntry from "./TimeEntry";
import NewTimeEntryType from "../../../../Types/NewTimeEntryType";


export default class TimeEntries extends ClockifyAPI implements IPostable {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries`;
  }

  withId(timeEntryId: string): TimeEntry {
    return new TimeEntry(this._apiKey, this.workspaceId, timeEntryId);
  }

  /**
   * If end is not sent in request means that stopwatch mode is active, otherwise time entry is manually added.
   * "start" is the only mandatory field in this request.
   */
  post(data: NewTimeEntryType): Promise<TimeEntryType> {
    return this.axiosPost(data, {});
  }

}
