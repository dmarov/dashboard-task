import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiActions } from '@/store/actions';
import { UiSelectors } from '@/store/selectors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    moduleLoading = false;

    isMenuOpen$: Observable<boolean>;

    constructor(
        private readonly store$: Store,
        private readonly router: Router,
    ) { }

    ngOnInit () {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart) {
                this.moduleLoading = true;
            } else if (event instanceof RouteConfigLoadEnd) {
                this.moduleLoading = false;
            }
        });

        this.isMenuOpen$ = this.store$.pipe(
            select(UiSelectors.selectDetailedMenuVisible)
        );
    }

    toggleMenuOpen() {
        this.store$.dispatch(UiActions.toggleMenuVisible());
    }
}
