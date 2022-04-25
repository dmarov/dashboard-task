import { UiActions } from '@/store/actions';
import { UiSelectors } from '@/store/selectors';
import { Component, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-burger',
    templateUrl: './burger.component.html',
    styleUrls: ['./burger.component.scss'],
})
export class BurgerComponent {

    @HostBinding('class.burger')
    blockClass = true;

    isMenuOpen$: Observable<boolean>;

    constructor(
        private readonly store$: Store,
    ) { }

    ngOnInit() {
        this.isMenuOpen$ = this.store$.pipe(
            select(UiSelectors.selectDetailedMenuVisible)
        );
    }

    toggleMenuOpen() {
        this.store$.dispatch(UiActions.toggleMenuVisible());
    }
}
