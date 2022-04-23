import { createReducer, on } from "@ngrx/store";
import { AlbumsActions } from "../actions";
import { AlbumsSearchFieldType, ApiAlbum } from "@/models"

export const featureKey = 'albums';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    activePage: number;
    albums: ApiAlbum[];
    searchTerm: string;
    searchField: AlbumsSearchFieldType;
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 12,
    activePage: 0,
    albums: [],
    searchTerm: "",
    searchField: AlbumsSearchFieldType.User,
};

export const reducer = createReducer(
    initialState,
    on(AlbumsActions.loadAlbums,
        (state) => ({ ...state, isLoading: true })
    ),
    on(AlbumsActions.loadAlbumsSuccess,
        (state, { albums }) => ({ ...state, albums, isLoading: false })
    ),
    on(AlbumsActions.loadAlbumsError,
        (state) => ({ ...state, isLoading: false })
    ),
    on(AlbumsActions.setActivePage,
        (state, action) => ({ ...state, activePage: action.page })
    ),
    on(AlbumsActions.setSearchTerm,
        (state, action) => ({ ...state, searchTerm: action.term })
    ),
    on(AlbumsActions.setSearchField,
        (state, action) => ({ ...state, searchField: action.field })
    ),
);
