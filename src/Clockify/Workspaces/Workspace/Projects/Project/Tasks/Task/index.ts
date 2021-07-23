import ClockifyAPI, {IDeletable, IGettable, IPuttable} from "../../../../../../../Api/ClockifyApi";
import type { TaskType } from "../../../../../../../Types/TaskType";
import type { NewTaskType } from "../../../../../../../Types/NewTaskType";


export default class Task extends ClockifyAPI implements IGettable<TaskType>, IPuttable<TaskType>, IDeletable<TaskType> {

  workspaceId: string;
  projectId: string;
  taskId: string;

  constructor(apiKey: string, workspaceId: string, projectId: string, taskId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
    this.projectId = projectId;
    this.taskId = taskId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/projects/${this.projectId}/tasks/${this.taskId}`;
  }

  /**
   * Find task on project by ID
   */
  get(): Promise<TaskType> {
    return this.axiosGet<TaskType>({});
  }

  /**
   * Update task on project
   */
  put(data: NewTaskType): Promise<TaskType> {
    return this.axiosPut<TaskType>(data, {});
  }

  /**
   * Delete task from project
   */
  delete(): Promise<TaskType> {
    return this.axiosDelete<TaskType>({});
  }

}
