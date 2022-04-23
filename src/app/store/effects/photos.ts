import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PhotosActions } from "@/store/actions";
import { PhotosService } from "@/services";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PhotosEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly photosService: PhotosService,
    ) { }

    loadPhotos$ = createEffect(
        () => this.actions$.pipe(
            ofType(PhotosActions.loadPhotos),
            mergeMap(
                () => this.photosService.getPhotos().pipe(
                    map(photos => PhotosActions.loadPhotosSuccess({ photos })),
                    catchError(error => of(PhotosActions.loadPhotosError({ error }))),
                )
            ),
        ),
    );
}
