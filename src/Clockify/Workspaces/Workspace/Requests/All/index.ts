import {IPostable} from "../../../../../Api/ClockifyApi";
import {RequestAllRequestsType} from "../../../../../Types/RequestAllRequestsType";
import {AllRequestsType} from "../../../../../Types/AllRequestsType";
import RequestsApi from "../../../../../Api/RequestsApi";

export default class All extends RequestsApi implements IPostable<AllRequestsType> {
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
