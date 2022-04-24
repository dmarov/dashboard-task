import { ApiPhoto, ApiPost } from '@/models';
import { DashboardActions } from '@/store/actions';
import { DashboardSelectors } from '@/store/selectors';
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

    isPostsLoading$: Observable<boolean>;
    isAlbumsLoading$: Observable<boolean>;
    isPhotosLoading$: Observable<boolean>;
    isLoading$: Observable<boolean>;

    latestPosts$: Observable<ApiPost[]>;
    recentPhotos$: Observable<ApiPhoto[]>;

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

        this.isPostsLoading$ = this.store$.pipe(
            select(DashboardSelectors.selectPostsLoading)
        );

        this.isAlbumsLoading$ = this.store$.pipe(
            select(DashboardSelectors.selectAlbumsLoading)
        );

        this.isPhotosLoading$ = this.store$.pipe(
            select(DashboardSelectors.selectPhotosLoading)
        );

        this.isLoading$ = this.store$.pipe(
            select(DashboardSelectors.selectIsLoading)
        );

        this.latestPosts$ = this.store$.pipe(
            select(DashboardSelectors.selectLatestPosts)
        );

        this.recentPhotos$ = this.store$.pipe(
            select(DashboardSelectors.selectRecentPhotos)
        );
    }
}
