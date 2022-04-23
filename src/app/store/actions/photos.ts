import { createAction, props } from '@ngrx/store';
import { ApiPhoto, PhotosSearchFieldType } from '@/models';

export const loadPhotos = createAction(
    '[Photos] loadPhotos',
);

export const loadPhotosSuccess = createAction(
    '[Photos] loadPhotosSuccess',
    props<{ photos: ApiPhoto[]}>(),
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
