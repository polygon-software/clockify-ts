import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api";
import UpdateClientQuery from "../../../../../Queries/UpdateClientQuery";
import type { UpdateClientType } from "../../../../../Types/UpdateClientType";
import type { ClientType } from "../../../../../Types/ClientType";
export default class Client extends ClockifyAPI implements IPuttable<ClientType>, IDeletable<ClientType> {
    workspaceId: string;
    clientId: string;
    constructor(apiKey: string, workspaceId: string, clientId: string);
    resourceSubPath(): string;
    put(data: UpdateClientType, query?: UpdateClientQuery): Promise<ClientType>;
    delete(): Promise<ClientType>;
}
