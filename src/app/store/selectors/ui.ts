import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, featureKey } from '../reducers/ui';

export const selectState = createFeatureSelector<State>(
    featureKey
);

export const selectDetailedMenuVisible = createSelector(
    selectState, (state) => state.detailedMenuVisible
);
