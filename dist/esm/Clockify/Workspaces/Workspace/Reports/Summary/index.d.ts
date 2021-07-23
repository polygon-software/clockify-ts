import { IPostable } from "../../../../../Api/ClockifyApi";
import { RequestSummaryReportType } from "../../../../../Types/RequestSummaryReportType";
import { SummaryReportType } from "../../../../../Types/SummaryReportType";
import ReportsApi from "../../../../../Api/ReportsApi";
export default class Summary extends ReportsApi implements IPostable<SummaryReportType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    post(data: RequestSummaryReportType): Promise<SummaryReportType>;
}
