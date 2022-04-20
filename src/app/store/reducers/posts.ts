import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost } from "@/models"

export const featureKey = 'posts';

export class State {
    posts: ApiPost[];
}

export const initialState: State = {
    posts: [],
};

export const reducer = createReducer(
    initialState,
    on(PostsActions.loadPostsSuccess,
        (state, {posts}) => ({...state, posts})
    ),
);
