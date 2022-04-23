import { PhotosSearchFieldType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/photos';
import {
    ApiPhotosCollectionFilter,
    ApiPhotosDefaultCollectionFilter,
    ApiPhotosTitleCollectionFilter,
    ApiPhotosAlbumCollectionFilter,
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

export const selectPhotos = createSelector(
    selectState, (state: State) => state.photos,
);

export const selectActiveFilter = createSelector(
    selectSearchTerm, selectSearchField, (term, field): ApiPhotosCollectionFilter => {
        let filter: ApiPhotosCollectionFilter = new ApiPhotosDefaultCollectionFilter();

        if (term.length > 0) {
            if (field === PhotosSearchFieldType.Album) {
                filter = new ApiPhotosAlbumCollectionFilter(term);
            } else if (field === PhotosSearchFieldType.Title) {
                filter = new ApiPhotosTitleCollectionFilter(term);
            }
        }

        return filter;
    }
);

export const selectFilteredPhotos = createSelector(
    selectPhotos, selectActiveFilter, (photos, filter) => {
        return photos.filter(p => filter.matches(p));
    }
);

export const selectCurrentPagePhotos = createSelector(
    selectActivePage, selectItemsPerPage, selectFilteredPhotos, (activePage, itemsPerPage, photos) => {
        return photos.slice(
            itemsPerPage * activePage,
            itemsPerPage * (activePage + 1)
        );
    }
);

export const selectTotalPages = createSelector(
    selectItemsPerPage, selectFilteredPhotos, (itemsPerPage, photos) =>
        Math.ceil(photos.length / itemsPerPage),
);
