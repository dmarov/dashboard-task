import { Component, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiActions } from '@/store/actions';
import { links } from '@/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

    @HostBinding('class.side-menu')
    blockClass = true;

    links = links;

    constructor(
        private readonly store$: Store,
    ) { }

    close() {
        this.store$.dispatch(
            UiActions.setDetailedMenuVisible({ visible: false })
        );
    }
}
