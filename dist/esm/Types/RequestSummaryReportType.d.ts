export declare enum RequestSummaryReportGroupsEnum {
    project = "PROJECT",
    client = "CLIENT",
    task = "TASK",
    tag = "TAG",
    date = "DATE",
    user = "USER",
    userGroup = "USER_GROUP",
    timeEntry = "TIMEENTRY"
}
export declare enum RequestSummaryReportSortOrderEnum {
    ascneding = "ASCENDING",
    descending = "DESCENDING"
}
export declare enum RequestSummaryReportInvoicingStateEnum {
    invoiced = "INVOICED",
    uninvoiced = "UNINVOICED",
    all = "ALL"
}
export declare enum RequestSummaryReportApprovalStateEnum {
    approved = "APPROVED",
    unapproved = "UNAPPROVED",
    all = "ALL"
}
export declare enum RequestSummaryReportSortColumnEnum {
    group = "GROUP",
    duration = "DURATION",
    amount = "AMOUNT"
}
export declare enum RequestSummaryReportAmountShownEnum {
    hideAmount = "HIDE_AMOUNT",
    earned = "EARNED",
    cost = "COST",
    profit = "PROFIT"
}
export declare enum RequestSummaryReportExportTypeEnum {
    json = "JSON",
    csv = "CSV",
    xlsx = "XLSX",
    pdf = "PDF"
}
export declare enum RequestSummaryReportContainsFilterEnum {
    contains = "CONTAINS",
    doesNotContain = "DOES_NOT_CONTAIN"
}
export declare enum RequestSummaryReportContainedInTimeEntryFilterEnum {
    contains = "CONTAINS",
    constainsOnly = "CONTAINS_ONLY",
    doesNotContain = "DOES_NOT_CONTAIN"
}
export declare enum RequestSummaryReportProjectStatusFilterEnum {
    all = "ALL",
    active = "ACTIVE",
    archived = "ARCHIVED"
}
export declare enum RequestSummaryReportClientStatusFilterEnum {
    all = "ALL",
    active = "ACTIVE",
    archived = "ARCHIVED"
}
export declare enum RequestSummaryReportTagStatusFilterEnum {
    all = "ALL",
    active = "ACTIVE",
    archived = "ARCHIVED"
}
export declare enum RequestSummaryReportUserStatusFilterEnum {
    all = "ALL",
    active = "ACTIVE",
    inactive = "INACTIVE"
}
export declare enum RequestSummaryReportTaskStatusFilterEnum {
    all = "ALL",
    active = "ACTIVE",
    done = "DONE"
}
type RequestSummaryReportType = {
    dateRangeStart: Date;
    dateRangeEnd: Date;
    summaryFilter: {
        groups: RequestSummaryReportGroupsEnum[];
        sortColumn?: RequestSummaryReportSortColumnEnum;
    };
    sortOrder?: RequestSummaryReportSortOrderEnum;
    exportType?: RequestSummaryReportExportTypeEnum;
    rounding?: boolean;
    amountShown?: RequestSummaryReportAmountShownEnum;
    timeZone?: string;
    invoicingState?: RequestSummaryReportInvoicingStateEnum;
    approvalState?: RequestSummaryReportApprovalStateEnum;
    users?: {
        ids: string[];
        contains: RequestSummaryReportContainsFilterEnum;
        status: RequestSummaryReportUserStatusFilterEnum;
    };
    clients?: {
        ids: string[];
        contains: RequestSummaryReportContainsFilterEnum;
        status: RequestSummaryReportClientStatusFilterEnum;
    };
    projects?: {
        ids: string[];
        contains: RequestSummaryReportContainsFilterEnum;
        status: RequestSummaryReportProjectStatusFilterEnum;
    };
    tasks?: {
        ids: string[];
        contains: RequestSummaryReportContainsFilterEnum;
        status: RequestSummaryReportTaskStatusFilterEnum;
    };
    tags?: {
        ids: string[];
        containedInTimeentry: RequestSummaryReportContainedInTimeEntryFilterEnum;
        status: RequestSummaryReportTagStatusFilterEnum;
    };
    billable?: boolean;
    description?: string;
    whithoutDescription?: boolean;
    customFields?: {
        id: string;
        value: string;
        type: string;
        typeCondition: string;
        empty: boolean;
    }[];
};
export { RequestSummaryReportType };
