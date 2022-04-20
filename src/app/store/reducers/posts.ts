import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost } from "@/models"

export const featureKey = 'posts';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    currentPage: number;
    posts: ApiPost[];
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 5,
    currentPage: 0,
    posts: [],
};

export const reducer = createReducer(
    initialState,
    on(PostsActions.loadPosts,
        (state) => ({ ...state, isLoading: true })
    ),
    on(PostsActions.loadPostsSuccess,
        (state, { posts }) => ({ ...state, posts, isLoading: true })
    ),
    on(PostsActions.loadPostsError,
        (state) => ({ ...state, isLoading: false })
    ),
);
