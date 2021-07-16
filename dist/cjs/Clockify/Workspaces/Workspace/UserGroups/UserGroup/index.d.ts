import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api";
import Users from "./Users";
import type { UserGroupType } from "../../../../../Types/UserGroupType";
export default class UserGroup extends ClockifyAPI implements IPuttable<UserGroupType>, IDeletable<UserGroupType> {
    workspaceId: string;
    userGroupId: string;
    constructor(apiKey: string, workspaceId: string, userGroupId: string);
    resourceSubPath(): string;
    get users(): Users;
    put(data: {
        name: string;
    }): Promise<UserGroupType>;
    delete(): Promise<UserGroupType>;
}
