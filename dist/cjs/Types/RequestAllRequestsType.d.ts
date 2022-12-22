export declare enum RequestAllRequestsStatusEnum {
    pending = "PENDING",
    approved = "APPROVED",
    rejected = "REJECTED"
}
type RequestAllRequestsType = {
    start: Date;
    end: Date;
    status: RequestAllRequestsStatusEnum;
    users: string[];
    userGroups: string[];
    page: number;
    pageSize: number;
};
export { RequestAllRequestsType };
