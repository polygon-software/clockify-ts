export enum RequestSummaryReportGroupsEnum {
  project = "PROJECT",
  client = "CLIENT",
  task = "TASK",
  tag = "TAG",
  date = "DATE",
  user = "USER",
  userGroup = "USER_GROUP",
  timeEntry = "TIMEENTRY",
}

export enum RequestSummaryReportSortOrderEnum {
  ascneding = "ASCENDING",
  descending = "DESCENDING",
}

export enum RequestSummaryReportInvoicingStateEnum {
  invoiced = "INVOICED",
  uninvoiced = "UNINVOICED",
  all = "ALL",
}

export enum RequestSummaryReportApprovalStateEnum {
  approved = "APPROVED",
  unapproved = "UNAPPROVED",
  all = "ALL",
}

export enum RequestSummaryReportSortColumnEnum {
  group = "GROUP",
  duration = "DURATION",
  amount = "AMOUNT",
}

export enum RequestSummaryReportAmountShownEnum {
  hideAmount = "HIDE_AMOUNT",
  earned = "EARNED",
  cost = "COST",
  profit = "PROFIT",
}

export enum RequestSummaryReportExportTypeEnum {
  json = "JSON",
  csv = "CSV",
  xlsx = "XLSX",
  pdf = "PDF",
}

export enum RequestSummaryReportContainsFilterEnum {
  contains = "CONTAINS",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestSummaryReportContainedInTimeEntryFilterEnum {
  contains = "CONTAINS",
  constainsOnly = "CONTAINS_ONLY",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestSummaryReportProjectStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestSummaryReportClientStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestSummaryReportTagStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestSummaryReportUserStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  inactive = "INACTIVE",
}

export enum RequestSummaryReportTaskStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  done = "DONE",
}

type RequestSummaryReportType = {
  dateRangeStart: Date,
  dateRangeEnd: Date,
  summaryFilter:  {
    groups: RequestSummaryReportGroupsEnum[],
    sortColumn?: RequestSummaryReportSortColumnEnum,
  },
  sortOrder?: RequestSummaryReportSortOrderEnum,
  exportType?: RequestSummaryReportExportTypeEnum,
  rounding?: boolean,
  amountShown?: RequestSummaryReportAmountShownEnum,
  timeZone?: string,
  invoicingState?: RequestSummaryReportInvoicingStateEnum,
  approvalState?: RequestSummaryReportApprovalStateEnum,
  users?: {
    ids: string[],
    contains: RequestSummaryReportContainsFilterEnum,
    status: RequestSummaryReportUserStatusFilterEnum,
  },
  clients?: {
    ids: string[],
    contains: RequestSummaryReportContainsFilterEnum,
    status: RequestSummaryReportClientStatusFilterEnum,
  },
  projects?: {
    ids: string[],
    contains: RequestSummaryReportContainsFilterEnum,
    status: RequestSummaryReportProjectStatusFilterEnum,
  },
  tasks?: {
    ids: string[],
    contains: RequestSummaryReportContainsFilterEnum,
    status: RequestSummaryReportTaskStatusFilterEnum,
  },
  tags?: {
    ids: string[],
    containedInTimeentry: RequestSummaryReportContainedInTimeEntryFilterEnum,
    status: RequestSummaryReportTagStatusFilterEnum,
  },
  billable?: boolean,
  description?: string,
  whithoutDescription?: boolean,
  customFields?: {
    id: string,
    value: string,
    type: string,
    typeCondition: string,
    empty: boolean,
  }[]
}

export {
  RequestSummaryReportType
}
