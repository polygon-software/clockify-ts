import Summary from "./Summary";
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Detailed from "./Detailed";
export default class Reports extends ClockifyAPI {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    get summary(): Summary;
    get detailed(): Detailed;
}
