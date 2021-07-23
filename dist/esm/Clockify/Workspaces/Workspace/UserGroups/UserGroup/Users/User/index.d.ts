import ClockifyAPI, { IDeletable } from "../../../../../../../Api/ClockifyApi";
import type { UserGroupType } from "../../../../../../../Types/UserGroupType";
export default class User extends ClockifyAPI implements IDeletable<UserGroupType> {
    workspaceId: string;
    userGroupId: string;
    userId: string;
    constructor(apiKey: string, workspaceId: string, userGroupId: string, userId: string);
    resourceSubPath(): string;
    delete(): Promise<UserGroupType>;
}
