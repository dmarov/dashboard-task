import { createAction, props } from '@ngrx/store';
import { ApiPost, ApiPhoto } from '@/models';

export const initState = createAction(
    '[Dashboard] initState',
);

export const loadAlbums = createAction(
    '[Dashboard] loadAlbums',
);

export const loadAlbumsSuccess = createAction(
    '[Dashboard] loadAlbumsSuccess',
    props<{ totalAlbums: number }>(),
);

export const loadAlbumsError = createAction(
    '[Dashboard] loadAlbumsError',
    props<{ error: Error}>(),
);

export const loadPosts = createAction(
    '[Dashboard] loadPosts',
);

export const loadPostsSuccess = createAction(
    '[Dashboard] loadPostsSuccess',
    props<{ latestPosts: ApiPost[], totalPosts: number }>(),
);

export const loadPostsError = createAction(
    '[Dashboard] loadPostsError',
    props<{ error: Error}>(),
);

export const loadPhotos = createAction(
    '[Dashboard] loadPhotos',
);

export const loadPhotosSuccess = createAction(
    '[Dashboard] loadPhotosSuccess',
    props<{ recentPhotos: ApiPhoto[], totalPhotos: number }>(),
);

export const loadPhotosError = createAction(
    '[Dashboard] loadPhotosError',
    props<{ error: Error}>(),
);
