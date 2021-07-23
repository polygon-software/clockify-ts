import Summary from "./Summary";
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Detailed from "./Detailed";

export default class Reports extends ClockifyAPI {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  get summary(): Summary {
    return new Summary(this._apiKey, this.workspaceId);
  }

  get detailed(): Detailed {
    return new Detailed(this._apiKey, this.workspaceId);
  }

}
