import { Query } from "./Query";
import MultiItemsQuery from "./MultiItemsQuery";
export default interface UserGroupQuery extends Query, MultiItemsQuery {
    projectId: string;
    name: string;
}
