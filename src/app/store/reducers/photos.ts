import { createReducer, on } from '@ngrx/store';
import { PhotosActions } from '../actions';
import { PhotosSearchFieldType, ApiPhoto } from '@/models';

export const featureKey = 'photos';

export class State {
    isLoading: boolean;
    itemsPerPage: number;
    activePage: number;
    photos: ApiPhoto[];
    searchTerm: string;
    searchField: PhotosSearchFieldType;
}

export const initialState: State = {
    isLoading: false,
    itemsPerPage: 12,
    activePage: 0,
    photos: [],
    searchTerm: '',
    searchField: PhotosSearchFieldType.Album,
};

export const reducer = createReducer(
    initialState,
    on(PhotosActions.loadPhotos,
        (state) => ({ ...state, isLoading: true })
    ),
    on(PhotosActions.loadPhotosSuccess,
        (state, { photos }) => ({ ...state, photos, isLoading: false })
    ),
    on(PhotosActions.loadPhotosError,
        (state) => ({ ...state, isLoading: false })
    ),
    on(PhotosActions.setActivePage,
        (state, action) => ({ ...state, activePage: action.page })
    ),
    on(PhotosActions.setSearchTerm,
        (state, action) => ({ ...state, searchTerm: action.term })
    ),
    on(PhotosActions.setSearchField,
        (state, action) => ({ ...state, searchField: action.field })
    ),
);
