import ClockifyAPI, { IGettable, IPostable } from "../../../../Api";
import Client from "./Client";
import ClientsQuery from "../../../../Queries/ClientsQuery";
import type { ClientType } from "../../../../Types/ClientType";
export default class Clients extends ClockifyAPI implements IGettable<ClientType[]>, IPostable<ClientType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(clientId: string): Client;
    get(query?: ClientsQuery): Promise<ClientType[]>;
    post(data: {
        name: string;
    }): Promise<ClientType>;
}
