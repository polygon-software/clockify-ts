import { AxiosInstance } from "axios";
import { Query } from "../../Queries/Query";
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
    constructor(apiKey: string);
    resourceSubPath(): string;
    clockifyApiInstance(apiKey: string): AxiosInstance;
    axiosGet<T>(query?: Query): Promise<T>;
    axiosPost<T>(data?: {}, query?: Query): Promise<T>;
    axiosPut<T>(data?: {}, query?: Query): Promise<T>;
    axiosPatch<T>(data?: {}, query?: Query): Promise<T>;
    axiosDelete<T>(query?: Query): Promise<T>;
}
