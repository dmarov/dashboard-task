import { createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions';

export const featureKey = 'ui';

export class State {
    detailedMenuVisible: boolean;
}

export const initialState: State = {
    detailedMenuVisible: false,
};

export const reducer = createReducer(
    initialState,
    on(UiActions.setDetailedMenuVisible,
        (state, {visible}) => ({...state, detailedMenuVisible: visible})
    ),
    on(UiActions.toggleMenuVisible,
        (state) => ({...state, detailedMenuVisible: !state.detailedMenuVisible})
    ),
);
