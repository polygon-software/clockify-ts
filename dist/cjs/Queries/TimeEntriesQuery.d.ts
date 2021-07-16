import { Query } from "./Query";
export default interface TimeEntriesQuery extends Query {
    description?: string;
    start?: Date;
    end?: Date;
    project?: string;
    task?: string;
    tags?: Array<string>;
    "project-required"?: boolean;
    "task-required"?: boolean;
    "consider-duration-format"?: boolean;
    hydrated?: boolean;
    "in-progress"?: boolean;
    page?: number;
    "page-size"?: number;
}
