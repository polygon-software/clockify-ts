export enum TimeEstimateTypeEnum {
  manual = "MANUAL",
  auto = "AUTO",
}
export enum BudgetEstimateTypeEnum {
  manual = "MANUAL",
  auto = "AUTO",
}
export enum TimeEstimateResetOptionEnum {
  monthly = "MONTHLY",
}
export enum BudgetEstimateResetOptionEnum {
  monthly = "MONTHLY",
}

type EstimateType = {
  "timeEstimate"?: {
    "estimate"?: string,
    "type"?: TimeEstimateTypeEnum,
    "active": boolean,
    "resetOption"?: null | TimeEstimateResetOptionEnum
  },
  "budgetEstimate"?: {
    "estimate"?: number,
    "type"?: BudgetEstimateTypeEnum,
    "active": boolean,
    "resetOption"?: null | BudgetEstimateResetOptionEnum
  }
}
export {
  EstimateType,
}
