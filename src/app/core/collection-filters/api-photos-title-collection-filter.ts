import { ApiPhoto } from "@/models";
import { ApiPhotosCollectionFilter } from ".";

export class ApiPhotosTitleCollectionFilter implements ApiPhotosCollectionFilter {

    constructor(
        private readonly term: string,
    ) { }

    matches(photo: ApiPhoto): boolean {
        return photo.title.includes(this.term);
    }
}
