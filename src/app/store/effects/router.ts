import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { tap } from "rxjs/operators";

@Injectable()
export class RouterEffects {

    constructor(
        private readonly actions$: Actions,
    ) { }

    onNavigated$ = createEffect(
        () => this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            tap(() => {
                const hash = window.location.hash;

                if (hash) {
                    const id = hash.replace(/#/, "");

                    setTimeout(() => {
                        const target = document.getElementById(id);
                        if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 300);
                } else {
                    setTimeout(() => {
                        const target = document.getElementById("top-pivot");
                        if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 300);
                }
            }),
        ),
        { dispatch: false }
    );
}
