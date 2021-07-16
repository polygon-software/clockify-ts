import ClockifyAPI, { IDeletable, IGettable, IPuttable } from "../../../../../../../Api";
import type { TaskType } from "../../../../../../../Types/TaskType";
import type { NewTaskType } from "../../../../../../../Types/NewTaskType";
export default class Task extends ClockifyAPI implements IGettable<TaskType>, IPuttable<TaskType>, IDeletable<TaskType> {
    workspaceId: string;
    projectId: string;
    taskId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string, taskId: string);
    resourceSubPath(): string;
    get(): Promise<TaskType>;
    put(data: NewTaskType): Promise<TaskType>;
    delete(): Promise<TaskType>;
}
