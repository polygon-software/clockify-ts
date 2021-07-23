import ClockifyAPI, {IPatchable} from "../../../../../Api/ClockifyApi";


export default class Invoiced extends ClockifyAPI implements IPatchable<null> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/time-entries/invoiced`;
  }

  /**
   * Mark time entries as invoiced
   */
  patch(data: { "timeEntryIds": Array<string>, "invoiced": boolean }): Promise<null> {
    return this.axiosPatch<null>(data, {});
  }

}
