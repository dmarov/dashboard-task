import { AlbumsSearchFieldType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/albums';
import {
    ApiAlbumCollectionFilter,
    ApiAlbumDefaultCollectionFilter,
    ApiAlbumTitleCollectionFilter,
    ApiAlbumUserCollectionFilter
} from '@/core/collection-filters';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectActivePage = createSelector(
    selectState, (state: State) => state.activePage
);

export const selectSearchTerm = createSelector(
    selectState, (state: State) => state.searchTerm
);

export const selectSearchField = createSelector(
    selectState, (state: State) => state.searchField
);

export const selectIsLoading = createSelector(
    selectState, (state: State) => state.isLoading,
);

export const selectItemsPerPage = createSelector(
    selectState, (state: State) => state.itemsPerPage,
);

export const selectAlbums = createSelector(
    selectState, (state: State) => state.albums,
);

export const selectActiveFilter = createSelector(
    selectSearchTerm, selectSearchField, (term, field): ApiAlbumCollectionFilter => {
        let filter: ApiAlbumCollectionFilter = new ApiAlbumDefaultCollectionFilter();

        if (term.length > 0) {
            if (field === AlbumsSearchFieldType.User) {
                filter = new ApiAlbumUserCollectionFilter(term);
            } else if (field === AlbumsSearchFieldType.Title) {
                filter = new ApiAlbumTitleCollectionFilter(term);
            }
        }

        return filter;
    }
);

export const selectFilteredAlbums = createSelector(
    selectAlbums, selectActiveFilter, (albums, filter) => {
        return albums.filter(p => filter.matches(p));
    }
);

export const selectCurrentPageAlbums = createSelector(
    selectActivePage, selectItemsPerPage, selectFilteredAlbums, (activePage, itemsPerPage, albums) => {
        return albums.slice(
            itemsPerPage * activePage,
            itemsPerPage * (activePage + 1)
        );
    }
);

export const selectTotalPages = createSelector(
    selectItemsPerPage, selectFilteredAlbums, (itemsPerPage, albums) =>
        Math.ceil(albums.length / itemsPerPage),
);
