import ClockifyAPI, { IGettable, IPostable } from "../../../../Api";
import UserGroup from "./UserGroup";
import UserGroupQuery from "../../../../Queries/UserGroupQuery";
import type { UserGroupType } from "../../../../Types/UserGroupType";
export default class UserGroups extends ClockifyAPI implements IGettable<UserGroupType[]>, IPostable<UserGroupType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(userGroupId: string): UserGroup;
    get(query: UserGroupQuery): Promise<UserGroupType[]>;
    post(data: {
        name: string;
    }): Promise<UserGroupType>;
}
