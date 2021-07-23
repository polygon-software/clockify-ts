import ClockifyAPI, { IPostable } from "../../../../../../Api/ClockifyApi";
import User from "./User";
import type { UserGroupType } from "../../../../../../Types/UserGroupType";
export default class Users extends ClockifyAPI implements IPostable<UserGroupType> {
    workspaceId: string;
    userGroupId: string;
    constructor(apiKey: string, workspaceId: string, userGroupId: string);
    resourceSubPath(): string;
    withId(userId: string): User;
    post(data: {
        userId: string;
    }): Promise<UserGroupType>;
}
