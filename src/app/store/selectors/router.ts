import { getSelectors } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

export const {
    selectQueryParam,
} = getSelectors();

export const selectSearchTerm = createSelector(
    selectQueryParam('search'),
    term => term ?? ''
);

export const selectSearchField = createSelector(
    selectQueryParam('searchField'),
    field => parseInt(field ?? '0')
);

export const selectSortType = createSelector(
    selectQueryParam('sortType'),
    sortType => parseInt(sortType ?? '0')
);

export const selectSortField = createSelector(
    selectQueryParam('sortField'),
    sortField => parseInt(sortField ?? '0')
);

export const selectPage = createSelector(
    selectQueryParam('page'),
    page => parseInt(page ?? '1') - 1
);
