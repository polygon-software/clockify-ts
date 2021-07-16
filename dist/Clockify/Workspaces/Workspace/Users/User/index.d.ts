import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api";
import TimeEntries from "./TimeEntries";
import { UserType } from "../../../../../Types/UserType";
export default class User extends ClockifyAPI implements IPuttable<UserType>, IDeletable<null> {
    workspaceId: string;
    userId: string;
    constructor(apiKey: string, workspaceId: string, userId: string);
    get timeEntries(): TimeEntries;
    resourceSubPath(): string;
    put(data: {
        membershipStatus: "ACTIVE" | "INACTIVE";
    }): Promise<UserType>;
    delete(): Promise<null>;
}
