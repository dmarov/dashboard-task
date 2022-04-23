import { createAction, props } from '@ngrx/store';
import { ApiAlbum, PhotosSearchFieldType } from '@/models';

export const loadAlbums = createAction(
    '[Photos] loadPhotos',
);

export const loadPhotosSuccess = createAction(
    '[Photos] loadPhotosSuccess',
    props<{ albums: ApiAlbum[]}>(),
);

export const loadPhotosError = createAction(
    '[Photos] loadPhotosError',
    props<{ error: Error}>(),
);

export const setActivePage = createAction(
    '[Photos] setActivePage',
    props<{ page: number }>(),
);

export const setSearchTerm = createAction(
    '[Photos] setSearchTerm',
    props<{ term: string }>(),
);

export const setSearchField = createAction(
    '[Photos] setSearchField',
    props<{ field: PhotosSearchFieldType }>(),
);
