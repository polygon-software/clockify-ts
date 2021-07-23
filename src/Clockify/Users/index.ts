import type { UserType } from "../../Types/UserType";
import ClockifyAPI, {IGettable} from "../../Api/ClockifyApi";

export default class Users extends ClockifyAPI implements IGettable<UserType> {

  resourceSubPath(): string {
    return "/user";
  }

  /**
   * Get currently logged in user's info
   */
  get(): Promise<UserType> {
    return this.axiosGet<UserType>();
  }
}
