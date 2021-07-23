import ClockifyAPI, { IGettable, IPostable } from "../../../../Api/ClockifyApi";
import type { TagType } from "../../../../Types/TagType";
import Tag from "./Tag";
import TagsQuery from "../../../../Queries/TagsQuery";
export default class Tags extends ClockifyAPI implements IGettable<TagType[]>, IPostable<TagType> {
    workspaceId: string;
    constructor(apiKey: string, workspaceId: string);
    resourceSubPath(): string;
    withId(tagId: string): Tag;
    get(query?: TagsQuery): Promise<TagType[]>;
    post(data: {
        name: string;
    }): Promise<TagType>;
}
