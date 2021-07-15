import ClockifyAPI, {IDeletable, IGettable, IPuttable, Query} from "../../../../../Api";
import TimeEntryType from "../../../../../Types/TimeEntryType";
import NewTimeEntryType from "../../../../../Types/NewTimeEntryType";


export default class TimeEntry extends ClockifyAPI implements IGettable, IPuttable, IDeletable {

  workspaceId: string;
  timeEntryId: string;

  constructor(apiKey: string, workspaceId: string, timeEntryId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.timeEntryId = timeEntryId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries/${this.timeEntryId}`;
  }

  /**
   * Get a specific time entry on workspace
   */
  get(query: TimeEntryQuery = {}): Promise<TimeEntryType> {
    return this.axiosGet(query);
  }

  /**
   * Update time entry on workspace
   */
  put(data: NewTimeEntryType): Promise<TimeEntryType> {
    return this.axiosPut(data, {});
  }

  /**
   * Delete time entry from workspace
   */
  delete(): Promise<null> {
    return this.axiosDelete({});
  }

}


interface TimeEntryQuery extends Query {
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
