import { createReducer, on } from "@ngrx/store";
import { PostsActions } from "../actions";
import { ApiPost, PostsSearchFieldType, PostsSortFieldType, SortType } from "@/models"

export const featureKey = 'posts';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    activePage: number;
    posts: ApiPost[];
    searchTerm: string;
    searchField: PostsSearchFieldType;
    sortType: SortType;
    sortField: PostsSortFieldType;
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 5,
    activePage: 0,
    posts: [],
    searchTerm: "",
    searchField: PostsSearchFieldType.User,
    sortType: SortType.Asc,
    sortField: PostsSortFieldType.Id,
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
    on(PostsActions.setSearchField,
        (state, action) => ({ ...state, searchField: action.field })
    ),
    on(PostsActions.setSortField,
        (state, action) => ({ ...state, sortField: action.field })
    ),
    on(PostsActions.setSortType,
        (state, action) => ({ ...state, sortType: action.sortType })
    ),
    on(PostsActions.toggleSortType,
        (state) => ({
            ...state,
            sortType: state.sortType === SortType.Asc ? SortType.Desc : SortType.Asc
        })
    ),
);
