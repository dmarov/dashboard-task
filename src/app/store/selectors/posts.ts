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

export const selectActiveFilter = createSelector(
    selectState, (state: State): ApiPostCollectionFilter => {
        let filter: ApiPostCollectionFilter = new ApiPostDefaultCollectionFilter();

        if (state.searchTerm.length > 0) {
            if (state.searchField === PostsSearchFieldType.User) {
                filter = new ApiPostUserCollectionFilter(state.searchTerm);
            } else if (state.searchField === PostsSearchFieldType.Title) {
                filter = new ApiPostTitleCollectionFilter(state.searchTerm);
            } else if (state.searchField === PostsSearchFieldType.Content) {
                filter = new ApiPostContentCollectionFilter(state.searchTerm);
            }
        }

        return filter;
    }
);

export const selectActiveSorter = createSelector(
    selectState, (state: State): ApiPostCollectionSorter => {
        let sorter: ApiPostCollectionSorter = new ApiPostIdCollectionSorter();

        if (state.sortField === PostsSortFieldType.User) {
            sorter = new ApiPostUserCollectionSorter();
        } else if (state.sortField === PostsSortFieldType.Title) {
            sorter = new ApiPostTitleCollectionSorter();
        } else if (state.sortField === PostsSortFieldType.Content) {
            sorter = new ApiPostContentCollectionSorter();
        }

        return sorter;
    }
);

export const selectSortedPosts = createSelector(
    selectState, selectActiveSorter, (state: State, sorter) => {
        const posts = Array.from(state.posts);
        posts.sort((a, b) => sorter.compare(a, b));

        if (state.sortType === SortType.Desc) {
            posts.reverse();
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
    selectState, selectFilteredAndSortedPosts, (state: State, posts) => {
        return posts.slice(
            state.itemsPerPage * state.activePage,
            state.itemsPerPage * (state.activePage + 1)
        );
    }
);

export const selectIsLoading = createSelector(
    selectState, (state: State) => state.isLoading,
);

export const selectTotalPages = createSelector(
    selectState, selectFilteredAndSortedPosts, (state: State, posts) =>
        Math.ceil(posts.length / state.itemsPerPage),
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
