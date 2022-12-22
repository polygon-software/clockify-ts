import type { UserType } from "./UserType";
import type { RoleType } from "./RoleType";
type MemberType = UserType & {
    "roles": Array<RoleType>;
};
export { MemberType, };
