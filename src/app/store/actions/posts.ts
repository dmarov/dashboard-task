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
