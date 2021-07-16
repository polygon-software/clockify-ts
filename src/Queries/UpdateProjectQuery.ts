import {Query} from "./Query";

export enum UpdateProjectQueryEstimateTypeEnum {
  manual = "MAUAL",
  auto = "AUTO",
}
export default interface UpdateProjectQuery extends Query {
  /**
   * MANUAL type enables one fixed estimate for the whole project. AUTO type enables task-based project estimate. If AUTO is enabled, estimate duration doesn't matter.
   */
  "estimate-type"?: "MANUAL" | "AUTO",
}
