import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectCurrentPagePosts = createSelector(
    selectState, (state: State) =>
        state.posts.slice(state.itemsPerPage * state.activePage, state.itemsPerPage)
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
