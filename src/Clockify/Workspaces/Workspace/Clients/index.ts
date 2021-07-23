import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import Client from "./Client";
import ClientsQuery from "../../../../Queries/ClientsQuery";
import type { ClientType } from "../../../../Types/ClientType";

export default class Clients extends ClockifyAPI implements IGettable<ClientType[]>, IPostable<ClientType> {

  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/clients`;
  }

  withId(clientId: string): Client {
    return new Client(this._apiKey, this.workspaceId, clientId);
  }

  /**
   * Find clients on workspace
   */
  get(query: ClientsQuery = {}): Promise<ClientType[]> {
    return this.axiosGet<ClientType[]>(query);
  }

  /**
   * Add a new client to workspace
   */
  post(data: { name: string }): Promise<ClientType> {
    return this.axiosPost<ClientType>(data, {});
  }
}
