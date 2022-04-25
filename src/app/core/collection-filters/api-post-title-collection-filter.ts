import { ApiPost } from '@/models';
import { ApiPostCollectionFilter } from '.';

export class ApiPostTitleCollectionFilter implements ApiPostCollectionFilter {

    constructor(
        private readonly term: string,
    ) { }

    matches(entry: ApiPost): boolean {
        return entry.title.includes(this.term);
    }
}
