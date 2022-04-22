import { ApiPost } from "@/models";
import { ApiPostCollectionFilter } from ".";

export class ApiPostUserCollectionFilter implements ApiPostCollectionFilter {

    constructor(
        private readonly id: number,
    ) { }

    matches(entry: ApiPost): boolean {
        return entry.userId === this.id
    }
}
