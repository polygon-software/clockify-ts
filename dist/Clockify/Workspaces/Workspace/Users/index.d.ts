import ClockifyAPI, { IGettable, IPostable } from "../../../../Api";
import User from "./User";
import UsersQuery from "../../../../Queries/UsersQuery";
import { NewUserType } from "../../../../Types/NewUserType";
import type { MemberType } from "../../../../Types/MemberType";
import type { UserType } from "../../../../Types/UserType";
export default class Users extends ClockifyAPI implements IGettable<MemberType[]>, IPostable<UserType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    withId(userId: string): User;
    resourceSubPath(): string;
    get(query: UsersQuery): Promise<MemberType[]>;
    post(data: NewUserType): Promise<UserType>;
}
