import { DashboardActions } from '@/store/actions';
import {DashboardSelectors} from '@/store/selectors';
import { Component, HostBinding, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-dashboard')
    pageClass = true;

    totalPosts$: Observable<number>;
    totalAlbums$: Observable<number>;
    totalPhotos$: Observable<number>;

    constructor(
        private readonly store$: Store,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(DashboardActions.initState());

        this.totalPosts$ = this.store$.pipe(
            select(DashboardSelectors.selectPostsTotal)
        );

        this.totalAlbums$ = this.store$.pipe(
            select(DashboardSelectors.selectAlbumsTotal)
        );

        this.totalPhotos$ = this.store$.pipe(
            select(DashboardSelectors.selectPhotosTotal)
        );
    }
}
