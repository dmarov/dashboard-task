import { ApiPost } from '@/models';
import { ApiPostCollectionSorter } from '.';

export class ApiPostContentCollectionSorter implements ApiPostCollectionSorter {

    compare(a: ApiPost, b: ApiPost): number {
        return a.body.localeCompare(b.body);
    }
}
