import ClockifyAPI, {IDeletable, IGettable, IPuttable, Query} from "../../../../../Api";
import UpdateClientType from "../../../../../Types/UpdateClientType";
import ClientType from "../../../../../Types/ClientType";

export default class Client extends ClockifyAPI implements IPuttable, IDeletable {

  workspaceId: string;
  clientId: string;

  constructor(apiKey: string, workspaceId: string, clientId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.clientId = clientId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/clients/${this.clientId}`;
  }

  /**
   * Update client
   */
  put(data: UpdateClientType, query: UpdateClientQuery = {}): Promise<ClientType> {
    return this.axiosPut(data, query);
  }

  /**
   * Delete client
   */
  delete(): Promise<ClientType> {
    return this.axiosDelete({});
  }

}

interface UpdateClientQuery extends Query {
  "archive-projects"?: boolean,
}
