import ClockifyAPI, {IGettable, IPostable, Query} from "../../../../Api";
import type { TagType } from "../../../../Types/TagType";
import Tag from "./Tag";

interface TagsQuery extends Query {
  name?: string,
  archived?: boolean,
  page?: number,
  "page-size"?: number,
}

export default class Tags extends ClockifyAPI implements IGettable<TagType[]>, IPostable<TagType> {
  workspaceId: string;

  constructor(apiKey: string, workspaceId: string) {
    super(apiKey);
    this.workspaceId = workspaceId;
  }

  resourceSubPath(): string {
    return `/workspaces/${this.workspaceId}/tags`;
  }

  withId(tagId: string): Tag {
    return new Tag(this._apiKey, this.workspaceId, tagId);
  }

  /**
   * Find tags on workspace
   */
  get(query?: TagsQuery): Promise<TagType[]> {
    return this.axiosGet(query);
  }

  /**
   * Add a new tag to workspace
   */
  post(data: { name: string }): Promise<TagType> {
    return this.axiosPost(data, {});
  }

}
