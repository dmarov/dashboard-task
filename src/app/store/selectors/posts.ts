import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/posts';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectCurrentPostsPage = createSelector(
    selectState, (state: State) =>
        state.posts.slice(state.itemsPerPage * state.currentPage, state.itemsPerPage)
);

export const selectIsLoading = createSelector(
    selectState, (state: State) => state.isLoading,
);
