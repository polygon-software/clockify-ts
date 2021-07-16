import type { UserType } from "./UserType";
import type { RoleType } from "./RoleType";
declare type MemberType = UserType & {
    "roles": Array<RoleType>;
};
export { MemberType, };
