import { IPostable } from "../../../../../Api/ClockifyApi";
import { DetailedReportType } from "../../../../../Types/DetailedReportType";
import { RequestDetailedReportType } from "../../../../../Types/RequestDetailedReportType";
import ReportsApi from "../../../../../Api/ReportsApi";
export default class Detailed extends ReportsApi implements IPostable<DetailedReportType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(data: RequestDetailedReportType): Promise<DetailedReportType>;
}
