import type { MembershipType } from "./MembershipType";
type WorkspaceType = {
    "hourlyRate": {
        "amount": number;
        "currency": string;
    };
    "id": string;
    "imageUrl": string;
    "memberships": Array<MembershipType>;
    "name": string;
    "workspaceSettings": {
        "automaticLock": {
            "changeDay": "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
            "dayOfMonth": number;
            "firstDay": "MONDAY" | "SUNDAY";
            "olderThanPeriod": "DAYS" | "WEEKS" | "MONTHS";
            "olderThanValue": number;
            "type": "OLDER_THAN";
        };
        "canSeeTimeSheet": boolean;
        "defaultBillableProjects": boolean;
        "forceDescription": boolean;
        "forceProjects": boolean;
        "forceTags": boolean;
        "forceTasks": boolean;
        "lockTimeEntries": Date;
        "onlyAdminsCreateProject": boolean;
        "onlyAdminsCreateTag": boolean;
        "onlyAdminsCreateTask": boolean;
        "onlyAdminsSeeAllTimeEntries": boolean;
        "onlyAdminsSeeBillableRates": boolean;
        "onlyAdminsSeeDashboard": boolean;
        "onlyAdminsSeePublicProjectsEntries": boolean;
        "projectFavorites": boolean;
        "projectGroupingLabel": boolean;
        "projectPickerSpecialFilter": boolean;
        "round": {
            "minutes": number;
            "round": string;
        };
        "timeRoundingInReports": boolean;
        "trackTimeDownToSecond": boolean;
        "isProjectPublicByDefault": boolean;
        "canSeeTracker": boolean;
        "featureSubscriptionType": string;
    };
};
export { WorkspaceType, };
