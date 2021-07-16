import { Query } from "./Query";
export declare enum CustomFieldQueryStatusEnum {
    inactive = "INACTIVE",
    visible = "VISIBLE",
    invisible = "INVISIBLE"
}
export default interface CustomFieldsQuery extends Query {
    name: string;
    status: CustomFieldQueryStatusEnum;
}
