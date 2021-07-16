import { Query } from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export default interface ClientsQuery extends Query, MultiItemsQuery {
    archived?: boolean;
    name?: string;
}
