import { ApiPostCollectionFilter } from ".";

export class ApiPostDefaultCollectionFilter implements ApiPostCollectionFilter {

    constructor() { }

    matches(): boolean {
        return true;
    }
}
