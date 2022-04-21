import { PostsSearchFieldType } from '@/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectCurrentPagePosts = createSelector(
    selectState, (state: State) => {

        const allPosts = state.posts.slice(
            state.itemsPerPage * state.activePage,
            state.itemsPerPage * (state.activePage + 1)
        );

        if (state.searchTerm.length > 0) {
            if (state.searchField === PostsSearchFieldType.User) {
                const userId = parseInt(state.searchTerm);

                if (userId !== NaN) {
                    return allPosts.filter(p => p.userId === userId)
                }
            } else if (state.searchField === PostsSearchFieldType.Title) {
                return allPosts.filter(p => p.title.includes(state.searchTerm));
            } else if (state.searchField === PostsSearchFieldType.Content) {
                return allPosts.filter(p => p.body.includes(state.searchTerm));
            }
        }

        return allPosts;
    }
);

export const selectIsLoading = createSelector(
    selectState, (state: State) => state.isLoading,
);

export const selectTotalPages = createSelector(
    selectState, (state: State) => Math.ceil(state.posts.length / state.itemsPerPage),
);

export const selectActivePage = createSelector(
    selectState, (state: State) => state.activePage
);

export const selectPostById = createSelector(
    selectState, (state: State, params: {id : number}) =>
        state.posts.find(p => p.id === params.id)
);
