import ClockifyAPI, { IGettable, IPostable, Query } from "../../../../Api";
import type { ClientType } from "../../../../Types/ClientType";
import Client from "./Client";

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
  get(query: ClientQuery = {}): Promise<ClientType[]> {
    return this.axiosGet<ClientType[]>(query);
  }

  /**
   * Add a new client to workspace
   */
  post(data: { name: string }): Promise<ClientType> {
    return this.axiosPost<ClientType>(data, {});
  }
}

interface ClientQuery extends Query {
  /**
   * If true, you'll get only archived clients. If false, you'll get only active clients.
   */
  archived?: boolean,
  /**
   * If provided, clients will be filtered by name
   */
  name?: string,
  page?: number,
  "page-size"?: number,
  "sort-column"?: "NAME",
  "sort-order"?: "ASCENDING" | "DESCENDING",
}
