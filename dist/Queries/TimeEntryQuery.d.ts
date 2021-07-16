import { Query } from "./Query";
export default interface TimeEntryQuery extends Query {
    "consider-duration-format"?: boolean;
    hydrated?: boolean;
}
