import type { EntityType } from "./EntityType";
export declare enum RoleEnum {
    projectManager = "PROJECT_MANAGER",
    teamManager = "TEAM_MANAGER",
    user = "USER",
    administrator = "ADMINISTRATOR"
}
type RoleType = {
    "role": RoleEnum;
    "entities": Array<EntityType>;
};
export { RoleType, };
