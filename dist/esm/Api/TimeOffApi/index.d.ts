import { AxiosInstance } from "axios";
import ClockifyAPI from "../ClockifyApi";
export default class TimeOffApi extends ClockifyAPI {
    clockifyApiInstance(apiKey: string): AxiosInstance;
}
