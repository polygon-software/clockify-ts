export enum MembershipStatusEnum {
  pending = "PENDING",
  active = "ACTIVE",
  declined = "DECLINED",
  inactive = "INACTIVE",
}
export enum MembershipTypeEnum {
  workspace = "WORKSPACE",
  project = "PROJECT",
  usergroup = "USERGROUP",
  all = "ALL",
}
export default interface MembershipType {
  "hourlyRate"?: {
    "amount": number,
    "currency"?: string
  },
  "costRate"?: {
    "amount": number,
    "currency"?: string
  },
  "membershipStatus"?: MembershipStatusEnum,
  "membershipType"?: MembershipTypeEnum,
  "targetId"?: string,
  "userId": string
}
