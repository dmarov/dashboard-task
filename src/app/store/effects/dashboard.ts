import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DashboardActions } from "@/store/actions";
import { AlbumsService, PhotosService, PostsService } from "@/services";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { select, Store } from "@ngrx/store";
import {DashboardSelectors} from "../selectors";

@Injectable()
export class DashboardEffects {

    constructor(
        private readonly store$: Store,
        private readonly actions$: Actions,
        private readonly albumsService: AlbumsService,
        private readonly photosService: PhotosService,
        private readonly postsService: PostsService,
    ) { }

    loadAlbums$ = createEffect(
        () => this.actions$.pipe(
            ofType(DashboardActions.loadAlbums),
            mergeMap(
                () => this.albumsService.getAlbums().pipe(
                    map(albums => DashboardActions.loadAlbumsSuccess({
                        totalAlbums: albums.length
                    })),
                    catchError(error => of(
                        DashboardActions.loadAlbumsError({ error })
                    )),
                )
            ),
        ),
    );

    loadPosts$ = createEffect(
        () => this.actions$.pipe(
            ofType(DashboardActions.loadPosts),
            withLatestFrom(this.store$.pipe(
                select(DashboardSelectors.selectLatestPostsLimit)
            )),
            mergeMap(
                (_action, limit) => this.postsService.getPosts().pipe(
                    map(posts => DashboardActions.loadPostsSuccess({
                        totalPosts: posts.length,
                        latestPosts: posts.slice(0, limit)
                    })),
                    catchError(error => of(
                        DashboardActions.loadPostsError({ error })
                    )),
                )
            ),
        ),
    );

    loadPhotos$ = createEffect(
        () => this.actions$.pipe(
            ofType(DashboardActions.loadPhotos),
            withLatestFrom(this.store$.pipe(
                select(DashboardSelectors.selectRecentPhotosLimit)
            )),
            mergeMap(
                (_action, limit) => this.photosService.getPhotos().pipe(
                    map(photos => DashboardActions.loadPhotosSuccess({
                        totalPhotos: photos.length,
                        recentPhotos: photos.slice(0, limit)
                    })),
                    catchError(error => of(
                        DashboardActions.loadPhotosError({ error })
                    )),
                )
            ),
        ),
    );
}
