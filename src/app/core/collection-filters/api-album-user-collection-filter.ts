import { ApiAlbum } from "@/models";
import { ApiAlbumCollectionFilter } from ".";

export class ApiAlbumUserCollectionFilter implements ApiAlbumCollectionFilter {

    private id: number;

    constructor(term: string) {
        this.id = parseInt(term);
    }

    matches(album: ApiAlbum): boolean {
        return album.userId === this.id;
    }
}
