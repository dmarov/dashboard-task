import { ApiPost } from '@/models';
import { ApiPostCollectionFilter } from '.';

export class ApiPostContentCollectionFilter implements ApiPostCollectionFilter {

    constructor(
        private readonly term: string,
    ) { }

    matches(entry: ApiPost): boolean {
        return entry.body.includes(this.term);
    }
}
