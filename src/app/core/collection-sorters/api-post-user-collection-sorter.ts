import { ApiPost } from "@/models";
import { ApiPostCollectionSorter } from ".";

export class ApiPostUserCollectionSorter implements ApiPostCollectionSorter {

    compare(a: ApiPost, b: ApiPost): number {
        return a.userId - b.userId;
    }
}
