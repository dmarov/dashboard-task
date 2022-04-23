import { ApiAlbumCollectionFilter } from ".";

export class ApiAlbumDefaultCollectionFilter implements ApiAlbumCollectionFilter {

    constructor() { }

    matches(): boolean {
        return true;
    }
}
