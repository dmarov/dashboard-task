import { createReducer, on } from "@ngrx/store";
import { DashboardActions } from "../actions";
import { ApiAlbum, ApiPhoto, ApiPost } from "@/models"

export const featureKey = 'dashboard';

export class State {
    isPostsLoading: boolean;
    lastestPosts: ApiPost[];
    totalPosts: number;
    latestPostsLimit: number;

    isAlbumsLoading: boolean;
    lastestAlbums: ApiAlbum[];
    totalAlbums: number;

    isPhotosLoading: boolean;
    lastestPhotos: ApiPhoto[];
    totalPhotos: number;
    recentPhotosLimit: number;
}

export const initialState: State = {
    isPostsLoading: false,
    lastestPosts: [],
    totalPosts: 0,
    latestPostsLimit: 20,

    isAlbumsLoading: false,
    lastestAlbums: [],
    totalAlbums: 0,

    isPhotosLoading: false,
    lastestPhotos: [],
    totalPhotos: 0,
    recentPhotosLimit: 30,
};

export const reducer = createReducer(
    initialState,
    on(DashboardActions.loadAlbums,
        (state) => ({ ...state, isLoading: true })
    ),
    on(DashboardActions.loadAlbumsSuccess,
        (state, { totalAlbums }) => ({ ...state, totalAlbums })
    ),
    on(DashboardActions.loadAlbumsError,
        (state) => ({ ...state, isLoading: false })
    ),

    on(DashboardActions.loadPosts,
        (state) => ({ ...state, isLoading: true })
    ),
    on(DashboardActions.loadPostsSuccess,
        (state, { totalPosts, latestPosts }) => ({ ...state, totalPosts, latestPosts })
    ),
    on(DashboardActions.loadPostsError,
        (state) => ({ ...state, isLoading: false })
    ),

    on(DashboardActions.loadPhotos,
        (state) => ({ ...state, isLoading: true })
    ),
    on(DashboardActions.loadPhotosSuccess,
        (state, { totalPhotos, recentPhotos }) => ({ ...state, totalPhotos, recentPhotos })
    ),
    on(DashboardActions.loadPhotosError,
        (state) => ({ ...state, isLoading: false })
    ),
);
