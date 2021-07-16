import ClockifyAPI, { IGettable, IPostable } from "../../../../../../Api";
import Task from "./Task";
import TasksQuery from "../../../../../../Queries/TasksQuery";
import type { TaskType } from "../../../../../../Types/TaskType";
import type { NewTaskType } from "../../../../../../Types/NewTaskType";
export default class Tasks extends ClockifyAPI implements IGettable<TaskType[]>, IPostable<TaskType> {
    workspaceId: string;
    projectId: string;
    constructor(apiKey: string, workspaceId: string, projectId: string);
    resourceSubPath(): string;
    withId(taskId: string): Task;
    get(query?: TasksQuery): Promise<TaskType[]>;
    post(data: NewTaskType): Promise<TaskType>;
}
