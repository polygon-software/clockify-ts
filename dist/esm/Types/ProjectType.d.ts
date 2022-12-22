import type { MembershipStatusEnum, MembershipTypeEnum } from "./MembershipType";
import { BudgetEstimateResetOptionEnum, BudgetEstimateTypeEnum, TimeEstimateResetOptionEnum, TimeEstimateTypeEnum } from "./EstimateType";
type ProjectType = {
    "id": string;
    "name": string;
    "hourlyRate": null | number;
    "clientId": string;
    "workspaceId": string;
    "billable": boolean;
    "memberships": Array<{
        userId: string;
        "hourlyRate": {
            "amount": number;
            "currency": string;
        };
        targetId: string;
        "membershipStatus": MembershipStatusEnum;
        "membershipType": MembershipTypeEnum;
    }>;
    "color": string;
    "archived": boolean;
    "duration": string;
    "clientName": string;
    "note": string;
    "template": boolean;
    "public": boolean;
    "costRate": null | number;
    "timeEstimate": {
        "estimate": string;
        "type": TimeEstimateTypeEnum;
        "resetOption": null | TimeEstimateResetOptionEnum;
        "active": boolean;
    } | null;
    "budgetEstimate": {
        "estimate": number;
        "type": BudgetEstimateTypeEnum;
        "resetOption": null | BudgetEstimateResetOptionEnum;
        "active": boolean;
    } | null;
};
export { ProjectType, };
