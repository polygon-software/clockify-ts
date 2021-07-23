"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestDetailedReportTaskStatusFilterEnum = exports.RequestDetailedReportUserStatusFilterEnum = exports.RequestDetailedReportTagStatusFilterEnum = exports.RequestDetailedReportClientStatusFilterEnum = exports.RequestDetailedReportProjectStatusFilterEnum = exports.RequestDetailedReportContainedInTimeEntryFilterEnum = exports.RequestDetailedReportContainsFilterEnum = exports.RequestDetailedReportExportTypeEnum = exports.RequestDetailedReportAmountShownEnum = exports.RequestDetailedReportSortColumnEnum = exports.RequestDetailedReportApprovalStateEnum = exports.RequestDetailedReportInvoicingStateEnum = exports.RequestDetailedReportSortOrderEnum = exports.RequestDetailedReportTotalOptionEnum = exports.RequestDetailedReportGroupsEnum = void 0;
var RequestDetailedReportGroupsEnum;
(function (RequestDetailedReportGroupsEnum) {
    RequestDetailedReportGroupsEnum["project"] = "PROJECT";
    RequestDetailedReportGroupsEnum["client"] = "CLIENT";
    RequestDetailedReportGroupsEnum["task"] = "TASK";
    RequestDetailedReportGroupsEnum["tag"] = "TAG";
    RequestDetailedReportGroupsEnum["date"] = "DATE";
    RequestDetailedReportGroupsEnum["user"] = "USER";
    RequestDetailedReportGroupsEnum["userGroup"] = "USER_GROUP";
    RequestDetailedReportGroupsEnum["timeEntry"] = "TIMEENTRY";
})(RequestDetailedReportGroupsEnum = exports.RequestDetailedReportGroupsEnum || (exports.RequestDetailedReportGroupsEnum = {}));
var RequestDetailedReportTotalOptionEnum;
(function (RequestDetailedReportTotalOptionEnum) {
    RequestDetailedReportTotalOptionEnum["calculate"] = "CALCULATE";
    RequestDetailedReportTotalOptionEnum["exclude"] = "EXCLUDE";
})(RequestDetailedReportTotalOptionEnum = exports.RequestDetailedReportTotalOptionEnum || (exports.RequestDetailedReportTotalOptionEnum = {}));
var RequestDetailedReportSortOrderEnum;
(function (RequestDetailedReportSortOrderEnum) {
    RequestDetailedReportSortOrderEnum["ascneding"] = "ASCENDING";
    RequestDetailedReportSortOrderEnum["descending"] = "DESCENDING";
})(RequestDetailedReportSortOrderEnum = exports.RequestDetailedReportSortOrderEnum || (exports.RequestDetailedReportSortOrderEnum = {}));
var RequestDetailedReportInvoicingStateEnum;
(function (RequestDetailedReportInvoicingStateEnum) {
    RequestDetailedReportInvoicingStateEnum["invoiced"] = "INVOICED";
    RequestDetailedReportInvoicingStateEnum["uninvoiced"] = "UNINVOICED";
    RequestDetailedReportInvoicingStateEnum["all"] = "ALL";
})(RequestDetailedReportInvoicingStateEnum = exports.RequestDetailedReportInvoicingStateEnum || (exports.RequestDetailedReportInvoicingStateEnum = {}));
var RequestDetailedReportApprovalStateEnum;
(function (RequestDetailedReportApprovalStateEnum) {
    RequestDetailedReportApprovalStateEnum["approved"] = "APPROVED";
    RequestDetailedReportApprovalStateEnum["unapproved"] = "UNAPPROVED";
    RequestDetailedReportApprovalStateEnum["all"] = "ALL";
})(RequestDetailedReportApprovalStateEnum = exports.RequestDetailedReportApprovalStateEnum || (exports.RequestDetailedReportApprovalStateEnum = {}));
var RequestDetailedReportSortColumnEnum;
(function (RequestDetailedReportSortColumnEnum) {
    RequestDetailedReportSortColumnEnum["id"] = "ID";
    RequestDetailedReportSortColumnEnum["description"] = "DESCRIPTION";
    RequestDetailedReportSortColumnEnum["user"] = "USER";
    RequestDetailedReportSortColumnEnum["duration"] = "DURATION";
    RequestDetailedReportSortColumnEnum["date"] = "DATE";
})(RequestDetailedReportSortColumnEnum = exports.RequestDetailedReportSortColumnEnum || (exports.RequestDetailedReportSortColumnEnum = {}));
var RequestDetailedReportAmountShownEnum;
(function (RequestDetailedReportAmountShownEnum) {
    RequestDetailedReportAmountShownEnum["hideAmount"] = "HIDE_AMOUNT";
    RequestDetailedReportAmountShownEnum["earned"] = "EARNED";
    RequestDetailedReportAmountShownEnum["cost"] = "COST";
    RequestDetailedReportAmountShownEnum["profit"] = "PROFIT";
})(RequestDetailedReportAmountShownEnum = exports.RequestDetailedReportAmountShownEnum || (exports.RequestDetailedReportAmountShownEnum = {}));
var RequestDetailedReportExportTypeEnum;
(function (RequestDetailedReportExportTypeEnum) {
    RequestDetailedReportExportTypeEnum["json"] = "JSON";
    RequestDetailedReportExportTypeEnum["csv"] = "CSV";
    RequestDetailedReportExportTypeEnum["xlsx"] = "XLSX";
    RequestDetailedReportExportTypeEnum["pdf"] = "PDF";
})(RequestDetailedReportExportTypeEnum = exports.RequestDetailedReportExportTypeEnum || (exports.RequestDetailedReportExportTypeEnum = {}));
var RequestDetailedReportContainsFilterEnum;
(function (RequestDetailedReportContainsFilterEnum) {
    RequestDetailedReportContainsFilterEnum["contains"] = "CONTAINS";
    RequestDetailedReportContainsFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestDetailedReportContainsFilterEnum = exports.RequestDetailedReportContainsFilterEnum || (exports.RequestDetailedReportContainsFilterEnum = {}));
var RequestDetailedReportContainedInTimeEntryFilterEnum;
(function (RequestDetailedReportContainedInTimeEntryFilterEnum) {
    RequestDetailedReportContainedInTimeEntryFilterEnum["contains"] = "CONTAINS";
    RequestDetailedReportContainedInTimeEntryFilterEnum["constainsOnly"] = "CONTAINS_ONLY";
    RequestDetailedReportContainedInTimeEntryFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestDetailedReportContainedInTimeEntryFilterEnum = exports.RequestDetailedReportContainedInTimeEntryFilterEnum || (exports.RequestDetailedReportContainedInTimeEntryFilterEnum = {}));
var RequestDetailedReportProjectStatusFilterEnum;
(function (RequestDetailedReportProjectStatusFilterEnum) {
    RequestDetailedReportProjectStatusFilterEnum["all"] = "ALL";
    RequestDetailedReportProjectStatusFilterEnum["active"] = "ACTIVE";
    RequestDetailedReportProjectStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestDetailedReportProjectStatusFilterEnum = exports.RequestDetailedReportProjectStatusFilterEnum || (exports.RequestDetailedReportProjectStatusFilterEnum = {}));
var RequestDetailedReportClientStatusFilterEnum;
(function (RequestDetailedReportClientStatusFilterEnum) {
    RequestDetailedReportClientStatusFilterEnum["all"] = "ALL";
    RequestDetailedReportClientStatusFilterEnum["active"] = "ACTIVE";
    RequestDetailedReportClientStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestDetailedReportClientStatusFilterEnum = exports.RequestDetailedReportClientStatusFilterEnum || (exports.RequestDetailedReportClientStatusFilterEnum = {}));
var RequestDetailedReportTagStatusFilterEnum;
(function (RequestDetailedReportTagStatusFilterEnum) {
    RequestDetailedReportTagStatusFilterEnum["all"] = "ALL";
    RequestDetailedReportTagStatusFilterEnum["active"] = "ACTIVE";
    RequestDetailedReportTagStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestDetailedReportTagStatusFilterEnum = exports.RequestDetailedReportTagStatusFilterEnum || (exports.RequestDetailedReportTagStatusFilterEnum = {}));
var RequestDetailedReportUserStatusFilterEnum;
(function (RequestDetailedReportUserStatusFilterEnum) {
    RequestDetailedReportUserStatusFilterEnum["all"] = "ALL";
    RequestDetailedReportUserStatusFilterEnum["active"] = "ACTIVE";
    RequestDetailedReportUserStatusFilterEnum["inactive"] = "INACTIVE";
})(RequestDetailedReportUserStatusFilterEnum = exports.RequestDetailedReportUserStatusFilterEnum || (exports.RequestDetailedReportUserStatusFilterEnum = {}));
var RequestDetailedReportTaskStatusFilterEnum;
(function (RequestDetailedReportTaskStatusFilterEnum) {
    RequestDetailedReportTaskStatusFilterEnum["all"] = "ALL";
    RequestDetailedReportTaskStatusFilterEnum["active"] = "ACTIVE";
    RequestDetailedReportTaskStatusFilterEnum["done"] = "DONE";
})(RequestDetailedReportTaskStatusFilterEnum = exports.RequestDetailedReportTaskStatusFilterEnum || (exports.RequestDetailedReportTaskStatusFilterEnum = {}));
//# sourceMappingURL=RequestDetailedReportType.js.map