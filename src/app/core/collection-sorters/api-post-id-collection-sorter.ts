import { ApiPost } from "@/models";
import { ApiPostCollectionSorter } from ".";

export class ApiPostIdCollectionSorter implements ApiPostCollectionSorter {

    compare(a: ApiPost, b: ApiPost): number {
        return a.id - b.id;
    }
}
