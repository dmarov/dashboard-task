import {AlbumsSearchFieldType, ApiAlbum} from '@/models';
import {AlbumsActions} from '@/store/actions';
import {AlbumsSelectors} from '@/store/selectors';
import {QueryParser} from '@/utils';
import { Component, HostBinding } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {withLatestFrom} from 'rxjs/operators';

@Component({
    selector: 'app-page-albums',
    templateUrl: './page-albums.component.html',
    styleUrls: ['./page-albums.component.scss'],
})
export class PageAlbumsComponent {

    @HostBinding('class.page')
    pageClass = true;

    albums$: Observable<ApiAlbum[]>;

    isLoading$: Observable<boolean>;

    totalPages$: Observable<number>;
    activePage$: Observable<number>;
    subscription = new Subscription();

    searchTerm$: Observable<string>;
    searchField$: Observable<AlbumsSearchFieldType>;

    searchFieldTypes = AlbumsSearchFieldType;

    constructor(
        private readonly store$: Store,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(AlbumsActions.loadAlbums());

        this.albums$ = this.store$.pipe(
            select(AlbumsSelectors.selectCurrentPageAlbums)
        );

        this.isLoading$ = this.store$.pipe(
            select(AlbumsSelectors.selectIsLoading)
        );

        this.totalPages$ = this.store$.pipe(
            select(AlbumsSelectors.selectTotalPages)
        );

        this.activePage$ = this.store$.pipe(
            select(AlbumsSelectors.selectActivePage)
        );

        this.searchTerm$ = this.store$.pipe(
            select(AlbumsSelectors.selectSearchTerm)
        );

        this.searchField$ = this.store$.pipe(
            select(AlbumsSelectors.selectSearchField)
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
                AlbumsActions.setActivePage({ page })
            );
        }
    }

    updateTerm(term: string, prevTerm: string) {
        const termMismatch = term !== prevTerm;

        if (termMismatch) {
            this.store$.dispatch(
                AlbumsActions.setSearchTerm({ term })
            );

            this.store$.dispatch(
                AlbumsActions.setActivePage({ page: 0 })
            );
        }
    }

    updateField(field: AlbumsSearchFieldType, prevField: AlbumsSearchFieldType) {
        const fieldMismatch = field !== prevField;

        if (fieldMismatch) {
            this.store$.dispatch(
                AlbumsActions.setSearchField({ field })
            );

            this.store$.dispatch(
                AlbumsActions.setActivePage({ page: 0 })
            );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
