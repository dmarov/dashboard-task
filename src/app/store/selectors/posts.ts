import { PostsSearchFieldType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';
import {
    ApiPostCollectionFilter,
    ApiPostContentCollectionFilter,
    ApiPostDefaultCollectionFilter,
    ApiPostTitleCollectionFilter,
    ApiPostUserCollectionFilter
} from '@/core/collection-filters';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectFilteredPosts = createSelector(
    selectState, (state: State) => {
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

        return state.posts.filter(p => filter.matches(p));
    }
);

export const selectCurrentPagePosts = createSelector(
    selectState, selectFilteredPosts, (state: State, posts) => {
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
    selectState, selectFilteredPosts, (state: State, posts) =>
        Math.ceil(posts.length / state.itemsPerPage),
);

export const selectActivePage = createSelector(
    selectState, (state: State) => state.activePage
);

export const selectPostById = createSelector(
    selectState, (state: State, params: {id : number}) =>
        state.posts.find(p => p.id === params.id)
);

export const selectSearchTerm = createSelector(
    selectState, (state: State) => state.searchTerm
);

export const selectSearchField = createSelector(
    selectState, (state: State) => state.searchField
);
