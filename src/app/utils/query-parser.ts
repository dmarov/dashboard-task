import { ParamMap } from "@angular/router";

export class QueryParser {
    static parsePage(params: ParamMap): number {
        const pageStr = params.get('page') ?? '1';
        const page = parseInt(pageStr) - 1;
        return page;
    }

    static parseSearch(params: ParamMap): string {
        return params.get('search') ?? '';
    }

    static parseSearchField(params: ParamMap): number {
        const fieldStr = params.get('searchField') ?? '0';
        return parseInt(fieldStr);
    }

}
