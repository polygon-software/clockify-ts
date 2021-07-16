import { Query } from "./Query";
export declare enum QuerySortOrderEnum {
    ascending = "ASCENDING",
    descending = "DESCENDING"
}
export default interface MultiItemsQuery extends Query {
    page?: number;
    "page-size"?: number;
    "sort-column"?: string;
    "sort-order"?: QuerySortOrderEnum;
}
