import ClockifyAPI, {IGettable, IPostable, Query} from "../../../../../../Api";
import Task from "./Task";
import TaskType from "../../../../../../Types/TaskType";
import NewTaskType from "../../../../../../Types/NewTaskType";

interface TaskQuery extends Query {
  "is-active"?: boolean,
  "name"?: string,
  page?: number,
  "page-size"?: number,
}

export default class Tasks extends ClockifyAPI implements IGettable, IPostable {

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
  get(query: TaskQuery = {}): Promise<Array<TaskType>> {
    return this.axiosGet(query);
  }

  /**
   * Add a new task on project
   */
  post(data: NewTaskType): Promise<TaskType> {
    return this.axiosPost(data, {});
  }

}
