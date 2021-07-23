import ClockifyAPI, { IDeletable, IGettable, IPuttable } from "../../../../../Api/ClockifyApi";
import type { TimeEntryType } from "../../../../../Types/TimeEntryType";
import type { NewTimeEntryType } from "../../../../../Types/NewTimeEntryType";
import TimeEntryQuery from "../../../../../Queries/TimeEntryQuery";
export default class TimeEntry extends ClockifyAPI implements IGettable<TimeEntryType>, IPuttable<TimeEntryType>, IDeletable<null> {
    workspaceId: string;
    timeEntryId: string;
    constructor(apiKey: string, workspaceId: string, timeEntryId: string);
    resourceSubPath(): string;
    get(query?: TimeEntryQuery): Promise<TimeEntryType>;
    put(data: NewTimeEntryType): Promise<TimeEntryType>;
    delete(): Promise<null>;
}
