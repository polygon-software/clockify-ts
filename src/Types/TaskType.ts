export enum TaskStatusEnum {
  active = "ACTIVE",
  done = "DONE",
}
export default interface TaskType {
  "assigneeIds": Array<string>,
  "estimate": string,
  "id": string,
  "name": string,
  "projectId": string,
  "billable": boolean,
  "hourlyRate": {
    "amount": null | number,
    "currency": string
  },
  "costRate": {
    "amount": null | number,
    "currency": string
  },
  "status": TaskStatusEnum
}
