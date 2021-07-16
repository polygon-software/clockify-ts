import ClockifyAPI, { IPatchable } from "../../../../../Api";
export default class Invoiced extends ClockifyAPI implements IPatchable<null> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    patch(data: {
        "timeEntryIds": Array<string>;
        "invoiced": boolean;
    }): Promise<null>;
}
