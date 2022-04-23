import { ApiPhoto } from "@/models";
import { ApiPhotosCollectionFilter } from ".";

export class ApiPhotosAlbumCollectionFilter implements ApiPhotosCollectionFilter {

    private id: number;

    constructor(term: string) {
        this.id = parseInt(term);
    }

    matches(photo: ApiPhoto): boolean {
        return photo.albumId === this.id;
    }
}
