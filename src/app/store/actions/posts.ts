import { createAction, props } from '@ngrx/store';
import { ApiPost, PostsSearchFieldType, PostsSortFieldType, SortType } from '@/models';

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

export const setSearchTerm = createAction(
    '[Posts] setSearchTerm',
    props<{ term: string }>(),
);

export const setSearchField = createAction(
    '[Posts] setSearchField',
    props<{ field: PostsSearchFieldType }>(),
);

export const setSortType = createAction(
    '[Posts] setSortType',
    props<{ sortType: SortType }>(),
);

export const setSortField = createAction(
    '[Posts] setSortField',
    props<{ field: PostsSortFieldType }>(),
);
