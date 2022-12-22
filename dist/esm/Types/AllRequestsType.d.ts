export declare enum AllRequestsStatusEnum {
    pending = "PENDING",
    approved = "APPROVED",
    rejected = "REJECTED"
}
type AllRequestsType = {
    count: number;
    requests: {
        id: string;
        workspaceId: string;
        policyId: string;
        policyName: string;
        timeUnit: string;
        userId: string;
        userName: string;
        userEmail: string;
        timeOffPeriod: {
            period: {
                start: Date;
                end: Date;
            };
            halfDay: boolean;
        };
        note: string;
        status: {
            statusType: AllRequestsStatusEnum;
            changedByUserId: string;
            changedByUserName: string;
            changedAt: Date;
            note: string;
        };
        balanceDiff: number;
        createdAt: Date;
        balance: number;
        requesterUserId: string;
        requesterUserName: string;
    }[];
};
export { AllRequestsType, };
