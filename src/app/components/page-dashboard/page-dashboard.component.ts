import { DashboardActions } from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-dashboard')
    pageClass = true;

    constructor(
        private readonly store$: Store,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(DashboardActions.initState());
    }

}
