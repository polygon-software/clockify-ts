import {IPostable} from "../../../../../Api/ClockifyApi";
import {DetailedReportType} from "../../../../../Types/DetailedReportType";
import {RequestDetailedReportType} from "../../../../../Types/RequestDetailedReportType";
import ReportsApi from "../../../../../Api/ReportsApi";

export default class Detailed extends ReportsApi implements IPostable<DetailedReportType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/reports/detailed`;
  }

  post(data: RequestDetailedReportType): Promise<DetailedReportType> {
    return this.axiosPost<DetailedReportType>(data, {});
  }
}
