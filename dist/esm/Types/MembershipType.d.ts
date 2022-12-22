export declare enum MembershipStatusEnum {
    pending = "PENDING",
    active = "ACTIVE",
    declined = "DECLINED",
    inactive = "INACTIVE"
}
export declare enum MembershipTypeEnum {
    workspace = "WORKSPACE",
    project = "PROJECT",
    usergroup = "USERGROUP",
    all = "ALL"
}
type MembershipType = {
    "hourlyRate"?: {
        "amount": number;
        "currency"?: string;
    };
    "costRate"?: {
        "amount": number;
        "currency"?: string;
    };
    "membershipStatus"?: MembershipStatusEnum;
    "membershipType"?: MembershipTypeEnum;
    "targetId"?: string;
    "userId": string;
};
export { MembershipType, };
