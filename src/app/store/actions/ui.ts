import { createAction, props } from '@ngrx/store';

export const setDetailedMenuVisible = createAction(
    '[Ui] setDetailedMenuVisible',
    props<{visible: boolean}>()
);

export const toggleMenuVisible = createAction(
    '[Ui] toggleMenuVisible',
);
