export declare enum TaskStatusEnum {
    active = "ACTIVE",
    done = "DONE"
}
type NewTaskType = {
    name: string;
    assigneeIds?: Array<string>;
    estimate?: string;
    billable?: boolean;
    status?: TaskStatusEnum;
};
export { NewTaskType, };
