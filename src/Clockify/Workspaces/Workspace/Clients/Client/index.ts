import ClockifyAPI, {IDeletable, IPuttable} from "../../../../../Api";
import UpdateClientQuery from "../../../../../Queries/UpdateClientQuery";
import type { UpdateClientType } from "../../../../../Types/UpdateClientType";
import type { ClientType } from "../../../../../Types/ClientType";

export default class Client extends ClockifyAPI implements IPuttable<ClientType>, IDeletable<ClientType> {

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
    return this.axiosPut<ClientType>(data, query);
  }

  /**
   * Delete client
   */
  delete(): Promise<ClientType> {
    return this.axiosDelete<ClientType>({});
  }

}
