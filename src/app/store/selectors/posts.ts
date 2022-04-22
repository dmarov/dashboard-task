import { PostsSearchFieldType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectFilteredPosts = createSelector(
    selectState, (state: State) => {
        if (state.searchTerm.length > 0) {
            if (state.searchField === PostsSearchFieldType.User) {
                const userId = parseInt(state.searchTerm);

                if (userId !== NaN) {
                    return state.posts.filter(p => p.userId === userId);
                }
            } else if (state.searchField === PostsSearchFieldType.Title) {
                return state.posts.filter(p => p.title.includes(state.searchTerm));
            } else if (state.searchField === PostsSearchFieldType.Content) {
                return state.posts.filter(p => p.body.includes(state.searchTerm));
            }
        }

        return state.posts;
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
