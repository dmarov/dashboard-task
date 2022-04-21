import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost, PostsSearchFieldType } from "@/models"

export const featureKey = 'posts';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    activePage: number;
    posts: ApiPost[];
    searchTerm: string;
    searchField: PostsSearchFieldType;
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 5,
    activePage: 0,
    posts: [],
    searchTerm: "",
    searchField: PostsSearchFieldType.User,
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
    on(PostsActions.setSearchTerm,
        (state, action) => ({ ...state, searchTerm: action.term })
    ),
    on(PostsActions.setSearchFieldType,
        (state, action) => ({ ...state, searchField: action.searchType })
    ),
);
