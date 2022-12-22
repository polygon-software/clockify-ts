import All from "./All";
import ClockifyAPI from "../../../../Api/ClockifyApi";

export default class Requests extends ClockifyAPI {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  get all(): All{
    return new All(this._apiKey, this.workspaceId);
  }
}
