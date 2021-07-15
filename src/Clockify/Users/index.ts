import UserType from "../../Types/UserType";
import ClockifyAPI, {IGettable} from "../../Api";

export default class Users extends ClockifyAPI implements IGettable {

  resourceSubPath(): string {
    return "/user";
  }

  /**
   * Get currently logged in user's info
   */
  get(): Promise<UserType> {
    return super.axiosGet();
  }
}
