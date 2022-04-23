import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlbumsActions } from "@/store/actions";
import { AlbumsService } from "@/services";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class AlbumsEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly albumsService: AlbumsService,
    ) { }

    loadAlbums$ = createEffect(
        () => this.actions$.pipe(
            ofType(AlbumsActions.loadAlbums),
            mergeMap(
                () => this.albumsService.getAlbums().pipe(
                    map(albums => AlbumsActions.loadAlbumsSuccess({ albums })),
                    catchError(error => of(AlbumsActions.loadAlbumsError({ error }))),
                )
            ),
        ),
    );
}
