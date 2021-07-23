"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSummaryReportTaskStatusFilterEnum = exports.RequestSummaryReportUserStatusFilterEnum = exports.RequestSummaryReportTagStatusFilterEnum = exports.RequestSummaryReportClientStatusFilterEnum = exports.RequestSummaryReportProjectStatusFilterEnum = exports.RequestSummaryReportContainedInTimeEntryFilterEnum = exports.RequestSummaryReportContainsFilterEnum = exports.RequestSummaryReportExportTypeEnum = exports.RequestSummaryReportAmountShownEnum = exports.RequestSummaryReportSortColumnEnum = exports.RequestSummaryReportApprovalStateEnum = exports.RequestSummaryReportInvoicingStateEnum = exports.RequestSummaryReportSortOrderEnum = exports.RequestSummaryReportGroupsEnum = void 0;
var RequestSummaryReportGroupsEnum;
(function (RequestSummaryReportGroupsEnum) {
    RequestSummaryReportGroupsEnum["project"] = "PROJECT";
    RequestSummaryReportGroupsEnum["client"] = "CLIENT";
    RequestSummaryReportGroupsEnum["task"] = "TASK";
    RequestSummaryReportGroupsEnum["tag"] = "TAG";
    RequestSummaryReportGroupsEnum["date"] = "DATE";
    RequestSummaryReportGroupsEnum["user"] = "USER";
    RequestSummaryReportGroupsEnum["userGroup"] = "USER_GROUP";
    RequestSummaryReportGroupsEnum["timeEntry"] = "TIMEENTRY";
})(RequestSummaryReportGroupsEnum = exports.RequestSummaryReportGroupsEnum || (exports.RequestSummaryReportGroupsEnum = {}));
var RequestSummaryReportSortOrderEnum;
(function (RequestSummaryReportSortOrderEnum) {
    RequestSummaryReportSortOrderEnum["ascneding"] = "ASCENDING";
    RequestSummaryReportSortOrderEnum["descending"] = "DESCENDING";
})(RequestSummaryReportSortOrderEnum = exports.RequestSummaryReportSortOrderEnum || (exports.RequestSummaryReportSortOrderEnum = {}));
var RequestSummaryReportInvoicingStateEnum;
(function (RequestSummaryReportInvoicingStateEnum) {
    RequestSummaryReportInvoicingStateEnum["invoiced"] = "INVOICED";
    RequestSummaryReportInvoicingStateEnum["uninvoiced"] = "UNINVOICED";
    RequestSummaryReportInvoicingStateEnum["all"] = "ALL";
})(RequestSummaryReportInvoicingStateEnum = exports.RequestSummaryReportInvoicingStateEnum || (exports.RequestSummaryReportInvoicingStateEnum = {}));
var RequestSummaryReportApprovalStateEnum;
(function (RequestSummaryReportApprovalStateEnum) {
    RequestSummaryReportApprovalStateEnum["approved"] = "APPROVED";
    RequestSummaryReportApprovalStateEnum["unapproved"] = "UNAPPROVED";
    RequestSummaryReportApprovalStateEnum["all"] = "ALL";
})(RequestSummaryReportApprovalStateEnum = exports.RequestSummaryReportApprovalStateEnum || (exports.RequestSummaryReportApprovalStateEnum = {}));
var RequestSummaryReportSortColumnEnum;
(function (RequestSummaryReportSortColumnEnum) {
    RequestSummaryReportSortColumnEnum["group"] = "GROUP";
    RequestSummaryReportSortColumnEnum["duration"] = "DURATION";
    RequestSummaryReportSortColumnEnum["amount"] = "AMOUNT";
})(RequestSummaryReportSortColumnEnum = exports.RequestSummaryReportSortColumnEnum || (exports.RequestSummaryReportSortColumnEnum = {}));
var RequestSummaryReportAmountShownEnum;
(function (RequestSummaryReportAmountShownEnum) {
    RequestSummaryReportAmountShownEnum["hideAmount"] = "HIDE_AMOUNT";
    RequestSummaryReportAmountShownEnum["earned"] = "EARNED";
    RequestSummaryReportAmountShownEnum["cost"] = "COST";
    RequestSummaryReportAmountShownEnum["profit"] = "PROFIT";
})(RequestSummaryReportAmountShownEnum = exports.RequestSummaryReportAmountShownEnum || (exports.RequestSummaryReportAmountShownEnum = {}));
var RequestSummaryReportExportTypeEnum;
(function (RequestSummaryReportExportTypeEnum) {
    RequestSummaryReportExportTypeEnum["json"] = "JSON";
    RequestSummaryReportExportTypeEnum["csv"] = "CSV";
    RequestSummaryReportExportTypeEnum["xlsx"] = "XLSX";
    RequestSummaryReportExportTypeEnum["pdf"] = "PDF";
})(RequestSummaryReportExportTypeEnum = exports.RequestSummaryReportExportTypeEnum || (exports.RequestSummaryReportExportTypeEnum = {}));
var RequestSummaryReportContainsFilterEnum;
(function (RequestSummaryReportContainsFilterEnum) {
    RequestSummaryReportContainsFilterEnum["contains"] = "CONTAINS";
    RequestSummaryReportContainsFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestSummaryReportContainsFilterEnum = exports.RequestSummaryReportContainsFilterEnum || (exports.RequestSummaryReportContainsFilterEnum = {}));
var RequestSummaryReportContainedInTimeEntryFilterEnum;
(function (RequestSummaryReportContainedInTimeEntryFilterEnum) {
    RequestSummaryReportContainedInTimeEntryFilterEnum["contains"] = "CONTAINS";
    RequestSummaryReportContainedInTimeEntryFilterEnum["constainsOnly"] = "CONTAINS_ONLY";
    RequestSummaryReportContainedInTimeEntryFilterEnum["doesNotContain"] = "DOES_NOT_CONTAIN";
})(RequestSummaryReportContainedInTimeEntryFilterEnum = exports.RequestSummaryReportContainedInTimeEntryFilterEnum || (exports.RequestSummaryReportContainedInTimeEntryFilterEnum = {}));
var RequestSummaryReportProjectStatusFilterEnum;
(function (RequestSummaryReportProjectStatusFilterEnum) {
    RequestSummaryReportProjectStatusFilterEnum["all"] = "ALL";
    RequestSummaryReportProjectStatusFilterEnum["active"] = "ACTIVE";
    RequestSummaryReportProjectStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestSummaryReportProjectStatusFilterEnum = exports.RequestSummaryReportProjectStatusFilterEnum || (exports.RequestSummaryReportProjectStatusFilterEnum = {}));
var RequestSummaryReportClientStatusFilterEnum;
(function (RequestSummaryReportClientStatusFilterEnum) {
    RequestSummaryReportClientStatusFilterEnum["all"] = "ALL";
    RequestSummaryReportClientStatusFilterEnum["active"] = "ACTIVE";
    RequestSummaryReportClientStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestSummaryReportClientStatusFilterEnum = exports.RequestSummaryReportClientStatusFilterEnum || (exports.RequestSummaryReportClientStatusFilterEnum = {}));
var RequestSummaryReportTagStatusFilterEnum;
(function (RequestSummaryReportTagStatusFilterEnum) {
    RequestSummaryReportTagStatusFilterEnum["all"] = "ALL";
    RequestSummaryReportTagStatusFilterEnum["active"] = "ACTIVE";
    RequestSummaryReportTagStatusFilterEnum["archived"] = "ARCHIVED";
})(RequestSummaryReportTagStatusFilterEnum = exports.RequestSummaryReportTagStatusFilterEnum || (exports.RequestSummaryReportTagStatusFilterEnum = {}));
var RequestSummaryReportUserStatusFilterEnum;
(function (RequestSummaryReportUserStatusFilterEnum) {
    RequestSummaryReportUserStatusFilterEnum["all"] = "ALL";
    RequestSummaryReportUserStatusFilterEnum["active"] = "ACTIVE";
    RequestSummaryReportUserStatusFilterEnum["inactive"] = "INACTIVE";
})(RequestSummaryReportUserStatusFilterEnum = exports.RequestSummaryReportUserStatusFilterEnum || (exports.RequestSummaryReportUserStatusFilterEnum = {}));
var RequestSummaryReportTaskStatusFilterEnum;
(function (RequestSummaryReportTaskStatusFilterEnum) {
    RequestSummaryReportTaskStatusFilterEnum["all"] = "ALL";
    RequestSummaryReportTaskStatusFilterEnum["active"] = "ACTIVE";
    RequestSummaryReportTaskStatusFilterEnum["done"] = "DONE";
})(RequestSummaryReportTaskStatusFilterEnum = exports.RequestSummaryReportTaskStatusFilterEnum || (exports.RequestSummaryReportTaskStatusFilterEnum = {}));
//# sourceMappingURL=RequestSummaryReportType.js.map