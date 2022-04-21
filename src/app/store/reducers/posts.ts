import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost } from "@/models"

export const featureKey = 'posts';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    activePage: number;
    posts: ApiPost[];
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 5,
    activePage: 0,
    posts: [],
};

export const reducer = createReducer(
    initialState,
    on(PostsActions.loadPosts,
        (state) => ({ ...state, isLoading: true })
    ),
    on(PostsActions.loadPostsSuccess,
        (state, { posts }) => ({ ...state, posts, isLoading: false })
    ),
    on(PostsActions.loadPostsError,
        (state) => ({ ...state, isLoading: false })
    ),
    on(PostsActions.setActivePage,
        (state, action) => ({ ...state, activePage: action.page })
    ),
);
