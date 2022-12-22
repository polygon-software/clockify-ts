import { AxiosInstance } from "axios";
import ClockifyAPI from "../ClockifyApi";
export default class RequestsApi extends ClockifyAPI {
    clockifyApiInstance(apiKey: string): AxiosInstance;
}
