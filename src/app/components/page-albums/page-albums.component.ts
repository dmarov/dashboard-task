import { AlbumsSearchFieldType, ApiAlbum } from '@/models';
import { AlbumsActions } from '@/store/actions';
import { AlbumsSelectors, RouterSelectors } from '@/store/selectors';
import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-page-albums',
    templateUrl: './page-albums.component.html',
    styleUrls: ['./page-albums.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PageAlbumsComponent implements OnInit, OnDestroy {

    @HostBinding('class.page')
    @HostBinding('class.page-albums')
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
            this.store$.pipe(
                select(RouterSelectors.selectPage),
                distinctUntilChanged(),
            ).subscribe(page => {
                this.store$.dispatch(
                    AlbumsActions.setActivePage({ page })
                );
            }),
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchTerm),
                distinctUntilChanged(),
            ).subscribe(term => {
                this.store$.dispatch(
                    AlbumsActions.setSearchTerm({ term })
                );

                this.store$.dispatch(
                    AlbumsActions.setActivePage({ page: 0 })
                );
            }),
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchField),
                distinctUntilChanged(),
            ).subscribe(field => {
                this.store$.dispatch(
                    AlbumsActions.setSearchField({ field })
                );

                this.store$.dispatch(
                    AlbumsActions.setActivePage({ page: 0 })
                );
            }),
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
