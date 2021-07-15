import UserType from "./UserType";
import RoleType from "./RoleType";

export default interface MemberType extends UserType {
  "roles": Array<RoleType>
}
