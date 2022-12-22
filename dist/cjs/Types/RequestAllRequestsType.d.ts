export declare enum RequestAllRequestsStatus {
    pending = "PENDING",
    approved = "APPROVED",
    descending = "DESCENDING"
}
type RequestAllRequestsType = {
    start: Date;
    end: Date;
    status: RequestAllRequestsStatus;
    users: string[];
    userGroups: string[];
    page: number;
    pageSize: number;
};
export { RequestAllRequestsType };
