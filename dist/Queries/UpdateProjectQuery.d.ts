import { Query } from "./Query";
export declare enum UpdateProjectQueryEstimateTypeEnum {
    manual = "MAUAL",
    auto = "AUTO"
}
export default interface UpdateProjectQuery extends Query {
    "estimate-type"?: "MANUAL" | "AUTO";
}
