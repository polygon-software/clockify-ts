import EntityType from "./EntityType";
export enum RoleEnum {
  projectManager = "PROJECT_MANAGER",
  teamManager = "TEAM_MANAGER",
  user = "USER",
  administrator = "ADMINISTRATOR"
}
export default interface RoleType {
  "role": RoleEnum,
  "entities": Array<EntityType>
}
