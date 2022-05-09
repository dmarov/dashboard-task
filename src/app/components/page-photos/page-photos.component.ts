import { ApiPhoto, PhotosSearchFieldType } from '@/models';
import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PhotosActions } from '@/store/actions';
import { PhotosSelectors, RouterSelectors } from '@/store/selectors';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-page-photos',
    templateUrl: './page-photos.component.html',
    styleUrls: ['./page-photos.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PagePhotosComponent implements OnInit, OnDestroy {

    @HostBinding('class.page')
    @HostBinding('class.page-photos')
    pageClass = true;

    photos$: Observable<ApiPhoto[]>;

    isLoading$: Observable<boolean>;

    totalPages$: Observable<number>;
    activePage$: Observable<number>;
    subscription = new Subscription();

    searchTerm$: Observable<string>;
    searchField$: Observable<PhotosSearchFieldType>;

    searchFieldTypes = PhotosSearchFieldType;

    constructor(
        private readonly store$: Store,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PhotosActions.loadPhotos());

        this.photos$ = this.store$.pipe(
            select(PhotosSelectors.selectCurrentPagePhotos)
        );

        this.isLoading$ = this.store$.pipe(
            select(PhotosSelectors.selectIsLoading)
        );

        this.totalPages$ = this.store$.pipe(
            select(PhotosSelectors.selectTotalPages)
        );

        this.activePage$ = this.store$.pipe(
            select(PhotosSelectors.selectActivePage)
        );

        this.searchTerm$ = this.store$.pipe(
            select(PhotosSelectors.selectSearchTerm)
        );

        this.searchField$ = this.store$.pipe(
            select(PhotosSelectors.selectSearchField)
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectPage),
                distinctUntilChanged(),
            ).subscribe(page => {
                this.store$.dispatch(
                    PhotosActions.setActivePage({ page })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchTerm),
                distinctUntilChanged(),
            ).subscribe(term => {
                this.store$.dispatch(
                    PhotosActions.setSearchTerm({ term })
                );

                this.store$.dispatch(
                    PhotosActions.setActivePage({ page: 0 })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchField),
                distinctUntilChanged(),
            ).subscribe(field => {
                this.store$.dispatch(
                    PhotosActions.setSearchField({ field })
                );

                this.store$.dispatch(
                    PhotosActions.setActivePage({ page: 0 })
                );
            })
        );
    }

    go(page: number) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { page: page + 1 },
            queryParamsHandling: 'merge',
        });
    }

    setSearchTerm(term: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { search: term },
            queryParamsHandling: 'merge',
        });
    }

    setSearchField(field: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { searchField: field },
            queryParamsHandling: 'merge',
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
