import axios, {AxiosInstance} from "axios";
import ClockifyAPI from "../ClockifyApi";

export default class TimeOffApi extends ClockifyAPI {
  clockifyApiInstance(apiKey: string): AxiosInstance {
    return axios.create({
      baseURL: "https://pto.api.clockify.me/v1",
      headers: {
        'content-type': 'application/json',
        'X-Api-Key': apiKey,
      },
    });
  }
}
