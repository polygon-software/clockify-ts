import ClockifyAPI, { IGettable, IPatchable, IPostable } from "../../../../../../Api/ClockifyApi";
import TimeEntriesQuery from "../../../../../../Queries/TimeEntriesQuery";
import type { TimeEntryType } from "../../../../../../Types/TimeEntryType";
import type { NewTimeEntryType } from "../../../../../../Types/NewTimeEntryType";
export default class TimeEntries extends ClockifyAPI implements IGettable<TimeEntryType[]>, IPostable<TimeEntryType>, IPatchable<TimeEntryType> {
    workspaceId: string;
    userId: string;
    constructor(apiKey: string, workspaceId: string, userId: string);
    resourceSubPath(): string;
    get(query?: TimeEntriesQuery): Promise<TimeEntryType[]>;
    post(data: NewTimeEntryType): Promise<TimeEntryType>;
    patch(data: {
        end: Date;
    }): Promise<TimeEntryType>;
}
