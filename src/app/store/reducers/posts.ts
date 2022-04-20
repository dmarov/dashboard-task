import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost } from "@/models"

export const featureKey = 'posts';

export class State {
    itemsPerPage: number;
    currentPage: number;
    posts: ApiPost[];
}

export const initialState: State = {
    itemsPerPage: 5,
    currentPage: 0,
    posts: [],
};

export const reducer = createReducer(
    initialState,
    on(PostsActions.loadPostsSuccess,
        (state, {posts}) => ({...state, posts})
    ),
);
