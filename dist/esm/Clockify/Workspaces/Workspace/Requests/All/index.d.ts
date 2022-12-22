import { IPostable } from "../../../../../Api/ClockifyApi";
import { RequestAllRequestsType } from "../../../../../Types/RequestAllRequestsType";
import { AllRequestsType } from "../../../../../Types/AllRequestsType";
import RequestsApi from "../../../../../Api/RequestsApi";
export default class All extends RequestsApi implements IPostable<AllRequestsType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(data: RequestAllRequestsType): Promise<AllRequestsType>;
}
