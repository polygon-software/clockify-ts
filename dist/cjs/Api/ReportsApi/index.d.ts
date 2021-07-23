import { AxiosInstance } from "axios";
import ClockifyAPI from "../ClockifyApi";
export default class ReportsApi extends ClockifyAPI {
    clockifyApiInstance(apiKey: string): AxiosInstance;
}
