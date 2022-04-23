import { createAction, props } from '@ngrx/store';
import { ApiAlbum, AlbumsSearchFieldType } from '@/models';

export const loadAlbums = createAction(
    '[Albums] loadAlbums',
);

export const loadAlbumsSuccess = createAction(
    '[Albums] loadAlbumsSuccess',
    props<{ albums: ApiAlbum[]}>(),
);

export const loadAlbumsError = createAction(
    '[Albums] loadAlbumsError',
    props<{ error: Error}>(),
);

export const setActivePage = createAction(
    '[Albums] setActivePage',
    props<{ page: number }>(),
);

export const setSearchTerm = createAction(
    '[Albums] setSearchTerm',
    props<{ term: string }>(),
);

export const setSearchField = createAction(
    '[Albums] setSearchField',
    props<{ field: AlbumsSearchFieldType }>(),
);
