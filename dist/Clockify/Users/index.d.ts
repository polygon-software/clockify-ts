import type { UserType } from "../../Types/UserType";
import ClockifyAPI, { IGettable } from "../../Api";
export default class Users extends ClockifyAPI implements IGettable<UserType> {
    resourceSubPath(): string;
    get(): Promise<UserType>;
}
