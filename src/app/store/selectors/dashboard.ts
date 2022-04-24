import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/dashboard';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectAlbumsLoading = createSelector(
    selectState, (state: State) => state.isAlbumsLoading
);

export const selectAlbumsTotal = createSelector(
    selectState, (state: State) => state.totalAlbums
);

export const selectPhotosLoading = createSelector(
    selectState, (state: State) => state.isPhotosLoading
);

export const selectPhotosTotal = createSelector(
    selectState, (state: State) => state.totalPhotos
);

export const selectRecentPhotos = createSelector(
    selectState, (state: State) => state.recentPhotos
);

export const selectRecentPhotosLimit = createSelector(
    selectState, (state: State) => state.recentPhotosLimit
);

export const selectPostsLoading = createSelector(
    selectState, (state: State) => state.isPostsLoading
);

export const selectPostsTotal = createSelector(
    selectState, (state: State) => state.totalPosts
);

export const selectLatestPosts = createSelector(
    selectState, (state: State) => state.latestPosts
);

export const selectLatestPostsLimit = createSelector(
    selectState, (state: State) => state.latestPostsLimit
);
