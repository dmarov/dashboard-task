import { ApiPost } from '@/models';
import { ApiPostCollectionSorter } from '.';

export class ApiPostTitleCollectionSorter implements ApiPostCollectionSorter {

    compare(a: ApiPost, b: ApiPost): number {
        return a.title.localeCompare(b.title);
    }
}
