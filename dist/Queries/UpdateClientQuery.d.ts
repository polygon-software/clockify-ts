import { Query } from "./Query";
export default interface UpdateClientQuery extends Query {
    "archive-projects"?: boolean;
}
