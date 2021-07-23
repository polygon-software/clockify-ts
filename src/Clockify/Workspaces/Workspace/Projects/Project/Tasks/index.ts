import ClockifyAPI, { IGettable, IPostable } from "../../../../../../Api/ClockifyApi";
import Task from "./Task";
import TasksQuery from "../../../../../../Queries/TasksQuery";
import type { TaskType } from "../../../../../../Types/TaskType";
import type { NewTaskType } from "../../../../../../Types/NewTaskType";

export default class Tasks extends ClockifyAPI implements IGettable<TaskType[]>, IPostable<TaskType> {

  workspaceId: string;
  projectId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/tasks`;
  }

  withId(taskId: string): Task {
    return new Task(this._apiKey, this.workspaceId, this.projectId, taskId);
  }

  /**
   * Find tasks on project
   */
  get(query: TasksQuery = {}): Promise<TaskType[]> {
    return this.axiosGet(query);
  }

  /**
   * Add a new task on project
   */
  post(data: NewTaskType): Promise<TaskType> {
    return this.axiosPost(data, {});
  }

}
