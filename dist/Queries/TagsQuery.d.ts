import { Query } from "./Query";
export default interface TagsQuery extends Query {
    name?: string;
    archived?: boolean;
    page?: number;
    "page-size"?: number;
}
