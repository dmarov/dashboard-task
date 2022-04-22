import { ApiPost } from "@/models";
import { ApiPostCollectionFilter } from ".";

export class ApiPostUserCollectionFilter implements ApiPostCollectionFilter {

    id: number;

    constructor(term: string) {
        this.id = parseInt(term);
    }

    matches(entry: ApiPost): boolean {
        return entry.userId === this.id
    }
}
