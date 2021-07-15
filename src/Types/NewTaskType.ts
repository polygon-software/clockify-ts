export enum TaskStatusEnum {
  active = "ACTIVE",
  done = "DONE",
}
export default interface NewTaskType {
  name: string,
  assigneeIds?: Array<string>,
  estimate?: string,
  billable?: boolean,
  status?: TaskStatusEnum,
}
