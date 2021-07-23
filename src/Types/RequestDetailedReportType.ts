export enum RequestDetailedReportGroupsEnum {
  project = "PROJECT",
  client = "CLIENT",
  task = "TASK",
  tag = "TAG",
  date = "DATE",
  user = "USER",
  userGroup = "USER_GROUP",
  timeEntry = "TIMEENTRY",
}

export enum RequestDetailedReportTotalOptionEnum {
  calculate = "CALCULATE",
  exclude = "EXCLUDE",
}

export enum RequestDetailedReportSortOrderEnum {
  ascneding = "ASCENDING",
  descending = "DESCENDING",
}

export enum RequestDetailedReportInvoicingStateEnum {
  invoiced = "INVOICED",
  uninvoiced = "UNINVOICED",
  all = "ALL",
}

export enum RequestDetailedReportApprovalStateEnum {
  approved = "APPROVED",
  unapproved = "UNAPPROVED",
  all = "ALL",
}

export enum RequestDetailedReportSortColumnEnum {
  id = "ID",
  description = "DESCRIPTION",
  user = "USER",
  duration = "DURATION",
  date = "DATE",
}

export enum RequestDetailedReportAmountShownEnum {
  hideAmount = "HIDE_AMOUNT",
  earned = "EARNED",
  cost = "COST",
  profit = "PROFIT",
}

export enum RequestDetailedReportExportTypeEnum {
  json = "JSON",
  csv = "CSV",
  xlsx = "XLSX",
  pdf = "PDF",
}

export enum RequestDetailedReportContainsFilterEnum {
  contains = "CONTAINS",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestDetailedReportContainedInTimeEntryFilterEnum {
  contains = "CONTAINS",
  constainsOnly = "CONTAINS_ONLY",
  doesNotContain = "DOES_NOT_CONTAIN",
}

export enum RequestDetailedReportProjectStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestDetailedReportClientStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestDetailedReportTagStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  archived = "ARCHIVED",
}

export enum RequestDetailedReportUserStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  inactive = "INACTIVE",
}

export enum RequestDetailedReportTaskStatusFilterEnum {
  all = "ALL",
  active = "ACTIVE",
  done = "DONE",
}

type RequestDetailedReportType = {
  dateRangeStart: Date,
  dateRangeEnd: Date,
  detailedFilter?:  {
    page?: number,
    pageSize?: number,
    sortColumn?: RequestDetailedReportSortColumnEnum,
    options?: {
      totals: RequestDetailedReportTotalOptionEnum,
    }
  },
  sortOrder?: RequestDetailedReportSortOrderEnum,
  exportType?: RequestDetailedReportExportTypeEnum,
  rounding?: boolean,
  amountShown?: RequestDetailedReportAmountShownEnum,
  timeZone?: string,
  invoicingState?: RequestDetailedReportInvoicingStateEnum,
  approvalState?: RequestDetailedReportApprovalStateEnum,
  users?: {
    ids: string[],
    contains: RequestDetailedReportContainsFilterEnum,
    status: RequestDetailedReportUserStatusFilterEnum,
  },
  clients?: {
    ids: string[],
    contains: RequestDetailedReportContainsFilterEnum,
    status: RequestDetailedReportClientStatusFilterEnum,
  },
  projects?: {
    ids: string[],
    contains: RequestDetailedReportContainsFilterEnum,
    status: RequestDetailedReportProjectStatusFilterEnum,
  },
  tasks?: {
    ids: string[],
    contains: RequestDetailedReportContainsFilterEnum,
    status: RequestDetailedReportTaskStatusFilterEnum,
  },
  tags?: {
    ids: string[],
    containedInTimeentry: RequestDetailedReportContainedInTimeEntryFilterEnum,
    status: RequestDetailedReportTagStatusFilterEnum,
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
  RequestDetailedReportType
}
