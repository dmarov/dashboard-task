import { ParamMap } from "@angular/router";

export class QueryParser {
    static parsePage(params: ParamMap): number {
        const pageStr = params.get('page') ?? '1';
        const page = parseInt(pageStr) - 1;
        return page;
    }
}
