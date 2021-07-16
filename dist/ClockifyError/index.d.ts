import { AxiosError } from "axios";
export default class ClockifyError extends Error {
    constructor(error: AxiosError);
}
