import { ApiPhoto, PhotosSearchFieldType } from '@/models';
import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PhotosActions } from '@/store/actions';
import { PhotosSelectors } from '@/store/selectors';
import { withLatestFrom } from 'rxjs/operators';
import { QueryParser } from '@/utils';

@Component({
    selector: 'app-page-photos',
    templateUrl: './page-photos.component.html',
    styleUrls: ['./page-photos.component.scss'],
})
export class PagePhotosComponent {

    @HostBinding('class.page')
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
            this.activatedRoute
                .queryParamMap.pipe(
                    withLatestFrom(
                        this.activePage$,
                        this.searchTerm$,
                        this.searchField$,
                    )
                )
                .subscribe(this.updateState)
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

    updateState = ([params, prevPage, prevTerm, prevField]) => {
        const page = QueryParser.parsePage(params);
        const term = QueryParser.parseSearch(params);
        const field = QueryParser.parseSearchField(params);

        this.updatePage(page, prevPage);
        this.updateTerm(term, prevTerm);
        this.updateField(field, prevField);
    }

    updatePage(page: number, prevPage: number) {
        const pageMismatch = page !== prevPage;

        if (pageMismatch) {
            this.store$.dispatch(
                PhotosActions.setActivePage({ page })
            );
        }
    }

    updateTerm(term: string, prevTerm: string) {
        const termMismatch = term !== prevTerm;

        if (termMismatch) {
            this.store$.dispatch(
                PhotosActions.setSearchTerm({ term })
            );

            this.store$.dispatch(
                PhotosActions.setActivePage({ page: 0 })
            );
        }
    }

    updateField(field: PhotosSearchFieldType, prevField: PhotosSearchFieldType) {
        const fieldMismatch = field !== prevField;

        if (fieldMismatch) {
            this.store$.dispatch(
                PhotosActions.setSearchField({ field })
            );

            this.store$.dispatch(
                PhotosActions.setActivePage({ page: 0 })
            );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
