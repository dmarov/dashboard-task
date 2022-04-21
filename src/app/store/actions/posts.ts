import { createAction, props } from '@ngrx/store';
import { ApiPost } from '@/models';

export const loadPosts = createAction(
    '[Posts] loadPosts',
);

export const loadPostsSuccess = createAction(
    '[Posts] loadPostsSuccess',
    props<{ posts: ApiPost[]}>(),
);

export const loadPostsError = createAction(
    '[Posts] loadPostsError',
    props<{ error: Error}>(),
);

export const setActivePage = createAction(
    '[Posts] setActivePage',
    props<{ page: number }>(),
);
