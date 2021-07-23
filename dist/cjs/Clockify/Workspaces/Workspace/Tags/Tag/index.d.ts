import ClockifyAPI, { IDeletable, IPuttable } from "../../../../../Api/ClockifyApi";
import type { TagType } from "../../../../../Types/TagType";
export default class Tag extends ClockifyAPI implements IPuttable<TagType>, IDeletable<TagType> {
    workspaceId: string;
    tagId: string;
    constructor(apiKey: string, workspaceId: string, tagId: string);
    resourceSubPath(): string;
    put(data: {
        name: string;
        archived?: boolean;
    }): Promise<TagType>;
    delete(): Promise<TagType>;
}
