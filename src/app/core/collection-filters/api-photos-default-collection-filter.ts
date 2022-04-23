import { ApiPhotosCollectionFilter } from ".";

export class ApiPhotosDefaultCollectionFilter implements ApiPhotosCollectionFilter {

    matches(): boolean {
        return true;
    }
}
