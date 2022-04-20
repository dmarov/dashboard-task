import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsActions } from "@/store/actions";
import { PostsService } from "@/services";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PostsEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly postsService: PostsService,
    ) { }

    loadPosts$ = createEffect(
        () => this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            mergeMap(
                () => this.postsService.getPosts().pipe(
                    map(posts => PostsActions.loadPostsSuccess({ posts })),
                    catchError(error => of(PostsActions.loadPostsError({ error }))),
                )
            ),
        ),
    );

    loadPostsSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(PostsActions.loadPostsSuccess),
            tap(() => {

            })
        ),
        { dispatch: false }
    );

    loadPostsError$ = createEffect(
        () => this.actions$.pipe(
            ofType(PostsActions.loadPostsError),
            tap(() => {

            })
        ),
        { dispatch: false }
    );
}
