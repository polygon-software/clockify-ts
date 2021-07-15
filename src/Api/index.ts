import { stringify } from "qs";
import axios, { AxiosInstance } from "axios";
import ClockifyError from "../ClockifyError";

const paramsSerializer = (params: unknown) => stringify(params, {
  arrayFormat: "repeat",
  serializeDate: (d: Date) => d.toISOString(),
});

export interface Query {
  [name: string]: string | number | Date | boolean | Array<string> | Array<number> | null | undefined,
}

export interface IGettable<T> {
  get(query: Query): Promise<T>;
}
export interface IPostable<T> {
  post(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IPuttable<T> {
  put(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IPatchable<T> {
  patch(data: Record<string, unknown>, query: Query): Promise<T>;
}
export interface IDeletable<T> {
  delete(query: Query): Promise<T>;
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

  axiosGet<T>(query: Query = {}): Promise<T> {
    return this._api.get<T>(this.resourceSubPath(), { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPost<T>(data = {}, query: Query = {}): Promise<T> {
    return this._api.post<T>(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPut<T>(data = {}, query: Query = {}): Promise<T> {
    return this._api.put<T>(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosPatch<T>(data = {}, query: Query = {}): Promise<T> {
    return this._api.patch<T>(this.resourceSubPath(), data, { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

  axiosDelete<T>(query: Query = {}): Promise<T> {
    return this._api.delete<T>(this.resourceSubPath(), { params: query, paramsSerializer })
      .then(res => res.data)
      .catch(err => { throw new ClockifyError(err); });
  }

}
