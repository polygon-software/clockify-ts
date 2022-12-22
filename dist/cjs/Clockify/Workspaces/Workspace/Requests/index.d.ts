import All from "./All";
import ClockifyAPI from "../../../../Api/ClockifyApi";
export default class Requests extends ClockifyAPI {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    get all(): All;
}
