import { stringify } from "qs";
import axios, { AxiosInstance } from "axios";
import ClockifyError from "../ClockifyError";

const paramsSerializer = (params: any) => stringify(params, {
  arrayFormat: "repeat",
  serializeDate: (d: Date) => d.toISOString(),
});

export interface Query {
  [name: string]: string | number | Date | boolean | Array<string> | Array<number> | null | undefined,
}

export interface IGettable {
  get(query: Query): Promise<any>;
}
export interface IPostable {
  post(data: Object, query: Query): Promise<any>;
}
export interface IPuttable {
  put(data: Object, query: Query): Promise<any>;
}
export interface IPatchable {
  patch(data: Object, query: Query): Promise<any>;
}
export interface IDeletable {
  delete(query: Query): Promise<any>;
}

export default class ClockifyAPI {

  _apiKey: string;
  _api: AxiosInstance;

  constructor(apiKey: string) {
    this._apiKey = apiKey;
    this._api = this.clockifyApiInstance(apiKey);
  }

  resourceSubPath(): string {
    return "";
  }

  clockifyApiInstance(apiKey: string): AxiosInstance {
    return axios.create({
      baseURL: "https://api.clockify.me/api/v1",
      headers: {
        'content-type': 'application/json',
        'X-Api-Key': apiKey,
      },
    });
  }

  axiosGet(query: Query = {}): Promise<any> {
    const uri = this.resourceSubPath();
    return this._api.get(uri, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPost(data = {}, query: Query = {}): Promise<any> {
    console.log(data);
    return this._api.post(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPut(data = {}, query: Query = {}): Promise<any> {
    return this._api.put(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPatch(data = {}, query: Query = {}): Promise<any> {
    return this._api.patch(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosDelete(query: Query = {}): Promise<any> {
    return this._api.delete(this.resourceSubPath(), { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

}
