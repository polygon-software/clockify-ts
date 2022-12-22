import type { MembershipType } from "./MembershipType";
export declare enum UserSettingsSummaryReportSettingsGroupEnum {
    project = "Project",
    client = "Client",
    user = "User",
    tag = "Tag",
    timeEntry = "Time Entry",
    task = "Task"
}
export declare enum UserSettingsSummaryReportSettingsSubroupEnum {
    project = "Project",
    client = "Client",
    user = "User",
    tag = "Tag",
    timeEntry = "Time Entry"
}
export declare enum UserStatusEnum {
    pending = "PENDING",
    active = "ACTIVE",
    declined = "DECLINED",
    inactive = "INACTIVE"
}
type UserType = {
    "activeWorkspace": string;
    "defaultWorkspace": string;
    "email": string;
    "id": string;
    "memberships": Array<MembershipType>;
    "name": string;
    "profilePicture": string;
    "settings": {
        "collapseAllProjectLists": boolean;
        "dashboardPinToTop": boolean;
        "dashboardSelection": string;
        "dashboardViewType": string;
        "dateFormat": string;
        "isCompactViewOn": boolean;
        "longRunning": boolean;
        "projectListCollapse": null;
        "sendNewsletter": boolean;
        "summaryReportSettings": {
            "group": UserSettingsSummaryReportSettingsGroupEnum;
            "subgroup": UserSettingsSummaryReportSettingsSubroupEnum;
        };
        "timeFormat": string;
        "timeTrackingManual": boolean;
        "timeZone": string;
        "weekStart": string;
        "weeklyUpdates": boolean;
    };
    "status": UserStatusEnum;
};
export { UserType, };
