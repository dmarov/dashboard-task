import { ApiPhotosTitleCollectionFilter } from "@/core/collection-filters";
import { ApiAlbum, ApiPhoto } from "@/models";
import { AlbumsService } from "@/services";
import { RouterSelectors } from "@/store/selectors";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Store, select } from "@ngrx/store";
import { forkJoin, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

export interface PageAlbumState {
    album: ApiAlbum | null;
    photos: ApiPhoto[];
    searchTerm: string;
}

@Injectable()
export class PageAlbumStore extends ComponentStore<PageAlbumState> {

    readonly album$ = this.select(state => state.album);

    readonly photos$ = this.select(state => state.photos);

    readonly searchTerm$ = this.store$.pipe(
        select(RouterSelectors.selectSearchTerm)
    );

    readonly filteredPhotos$ = this.select(
        this.photos$,
        this.searchTerm$,
        (photos, term) => {
            const filter = new ApiPhotosTitleCollectionFilter(term);
            return photos.filter(p => filter.matches(p));
        }
    );

    constructor(
        private readonly albumsService: AlbumsService,
        private readonly store$: Store,
    ) {
        super({
            album: null,
            photos: [],
            searchTerm: '',
        });
    }

    private readonly setAlbum = this.updater(
        (state, response: { album: ApiAlbum, photos: ApiPhoto[] }) => ({
            ...state,
            album: response.album,
            photos: response.photos,
        })
    );

    readonly init = this.effect((id$: Observable<number>) => {
        return id$.pipe(
            switchMap(id => forkJoin({
                album: this.albumsService.getAlbum(id),
                photos: this.albumsService.getAlbumPhotos(id),
            }).pipe(
                tapResponse(
                    (response) => this.setAlbum(response),
                    (error: HttpErrorResponse) => { },
                )
            )),
        );
    });

    readonly setSearchTerm = this.updater((state, searchTerm: string) => ({ ...state, searchTerm }));
}
