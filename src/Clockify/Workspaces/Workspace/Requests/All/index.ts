import {IPostable} from "../../../../../Api/ClockifyApi";
import {RequestAllRequestsType} from "../../../../../Types/RequestAllRequestsType";
import {AllRequestsType} from "../../../../../Types/AllRequestsType";
import TimeOffApi from "../../../../../Api/TimeOffApi";

export default class All extends TimeOffApi implements IPostable<AllRequestsType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/requests`;
  }

  post(data: RequestAllRequestsType): Promise<AllRequestsType> {
    return this.axiosPost<AllRequestsType>(data, {});
  }
}
