import { ApiAlbum } from "@/models";
import { ApiAlbumCollectionFilter } from ".";

export class ApiAlbumTitleCollectionFilter implements ApiAlbumCollectionFilter {

    constructor(
        private readonly term: string,
    ) { }

    matches(album: ApiAlbum): boolean {
        return album.title.includes(this.term);
    }
}
