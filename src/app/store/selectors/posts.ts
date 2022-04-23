import { PostsSearchFieldType, PostsSortFieldType, SortType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';
import {
    ApiPostCollectionFilter,
    ApiPostContentCollectionFilter,
    ApiPostDefaultCollectionFilter,
    ApiPostTitleCollectionFilter,
    ApiPostUserCollectionFilter
} from '@/core/collection-filters';

import {
    ApiPostCollectionSorter,
    ApiPostContentCollectionSorter,
    ApiPostIdCollectionSorter,
    ApiPostTitleCollectionSorter,
    ApiPostUserCollectionSorter,
} from '@/core/collection-sorters';

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

export const selectPosts = createSelector(
    selectState, (state: State) => state.posts,
);

export const selectSortField = createSelector(
    selectState, (state: State) => state.sortField,
);

export const selectSortType = createSelector(
    selectState, (state: State) => state.sortType,
);

export const selectActiveFilter = createSelector(
    selectSearchTerm, selectSearchField, (term, field): ApiPostCollectionFilter => {
        let filter: ApiPostCollectionFilter = new ApiPostDefaultCollectionFilter();

        if (term.length > 0) {
            if (field === PostsSearchFieldType.User) {
                filter = new ApiPostUserCollectionFilter(term);
            } else if (field === PostsSearchFieldType.Title) {
                filter = new ApiPostTitleCollectionFilter(term);
            } else if (field === PostsSearchFieldType.Content) {
                filter = new ApiPostContentCollectionFilter(term);
            }
        }

        return filter;
    }
);

export const selectActiveSorter = createSelector(
    selectSortField, (field): ApiPostCollectionSorter => {
        let sorter: ApiPostCollectionSorter = new ApiPostIdCollectionSorter();

        if (field === PostsSortFieldType.User) {
            sorter = new ApiPostUserCollectionSorter();
        } else if (field === PostsSortFieldType.Title) {
            sorter = new ApiPostTitleCollectionSorter();
        } else if (field === PostsSortFieldType.Content) {
            sorter = new ApiPostContentCollectionSorter();
        }

        return sorter;
    }
);

export const selectSortedPosts = createSelector(
    selectPosts, selectActiveSorter, selectSortType, (posts, sorter, sortType) => {
        const result = Array.from(posts);
        result.sort((a, b) => sorter.compare(a, b));

        if (sortType === SortType.Desc) {
            result.reverse();
        }

        return posts;
    }
);

export const selectFilteredAndSortedPosts = createSelector(
    selectSortedPosts, selectActiveFilter, (posts, filter) => {
        return posts.filter(p => filter.matches(p));
    }
);

export const selectCurrentPagePosts = createSelector(
    selectActivePage, selectItemsPerPage, selectFilteredAndSortedPosts, (activePage, itemsPerPage, posts) => {
        return posts.slice(
            itemsPerPage * activePage,
            itemsPerPage * (activePage + 1)
        );
    }
);

export const selectTotalPages = createSelector(
    selectItemsPerPage, selectFilteredAndSortedPosts, (itemsPerPage, posts) =>
        Math.ceil(posts.length / itemsPerPage),
);
