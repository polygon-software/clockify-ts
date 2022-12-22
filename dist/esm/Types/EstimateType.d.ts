export declare enum TimeEstimateTypeEnum {
    manual = "MANUAL",
    auto = "AUTO"
}
export declare enum BudgetEstimateTypeEnum {
    manual = "MANUAL",
    auto = "AUTO"
}
export declare enum TimeEstimateResetOptionEnum {
    monthly = "MONTHLY"
}
export declare enum BudgetEstimateResetOptionEnum {
    monthly = "MONTHLY"
}
type EstimateType = {
    "timeEstimate"?: {
        "estimate"?: string;
        "type"?: TimeEstimateTypeEnum;
        "active": boolean;
        "resetOption"?: null | TimeEstimateResetOptionEnum;
    };
    "budgetEstimate"?: {
        "estimate"?: number;
        "type"?: BudgetEstimateTypeEnum;
        "active": boolean;
        "resetOption"?: null | BudgetEstimateResetOptionEnum;
    };
};
export { EstimateType, };
