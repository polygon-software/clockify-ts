import {AxiosError} from "axios";
import { getReasonPhrase } from "http-status-codes";

export default class ClockifyError extends Error {

  constructor(error: AxiosError, ) {
    let message = "";
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      const statusCode = error.response.status;
      message = `Response Error[${statusCode}]: ${getReasonPhrase(statusCode)}. Message: ${error.response.data.message}. Resource: ${error.response.data.path}`;
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      message = `Response Error: ${JSON.stringify(error.request)}`
    } else {
      // Something happened in setting up the request and triggered an Error
      message = `Error: ${error.message}`;
    }
    super(message);
  }

}
