export declare enum TaskStatusEnum {
    active = "ACTIVE",
    done = "DONE"
}
declare type NewTaskType = {
    name: string;
    assigneeIds?: Array<string>;
    estimate?: string;
    billable?: boolean;
    status?: TaskStatusEnum;
};
export { NewTaskType, };
