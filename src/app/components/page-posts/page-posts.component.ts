import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApiPost, PostsSearchFieldType, PostsSortFieldType, SortType } from "@/models";
import { PostsSelectors } from "@/store/selectors";
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParser } from '@/utils';
import { first, withLatestFrom } from 'rxjs/operators';

@Component({
    selector: 'app-page-posts',
    templateUrl: './page-posts.component.html',
    styleUrls: ['./page-posts.component.scss'],
})
export class PagePostsComponent implements OnInit, OnDestroy {

    @HostBinding('class.page')
    @HostBinding('class.page-posts')
    pageClass = true;

    posts$: Observable<ApiPost[]>;

    isLoading$: Observable<boolean>;

    totalPages$: Observable<number>;
    activePage$: Observable<number>;
    subscription = new Subscription();

    searchTerm$: Observable<string>;
    searchField$: Observable<PostsSearchFieldType>;

    searchFieldTypes = PostsSearchFieldType;

    sortField$: Observable<PostsSortFieldType>;
    sortType$: Observable<SortType>;
    sortFields = PostsSortFieldType;

    constructor(
        private readonly store$: Store,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PostsActions.loadPosts());

        this.posts$ = this.store$.pipe(
            select(PostsSelectors.selectCurrentPagePosts)
        );

        this.isLoading$ = this.store$.pipe(
            select(PostsSelectors.selectIsLoading)
        );

        this.totalPages$ = this.store$.pipe(
            select(PostsSelectors.selectTotalPages)
        );

        this.activePage$ = this.store$.pipe(
            select(PostsSelectors.selectActivePage)
        );

        this.searchTerm$ = this.store$.pipe(
            select(PostsSelectors.selectSearchTerm)
        );

        this.searchField$ = this.store$.pipe(
            select(PostsSelectors.selectSearchField)
        );

        this.sortField$ = this.store$.pipe(
            select(PostsSelectors.selectSortField)
        );

        this.sortType$ = this.store$.pipe(
            select(PostsSelectors.selectSortType)
        );

        this.subscription.add(
            this.activatedRoute
                .queryParamMap.pipe(
                    withLatestFrom(
                        this.activePage$,
                        this.searchTerm$,
                        this.searchField$,
                        this.sortType$,
                        this.sortField$,
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

    setSortType(sortType: SortType) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { sortType },
            queryParamsHandling: 'merge',
        });
    }

    setSortField(sortField: PostsSortFieldType) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { sortField },
            queryParamsHandling: 'merge',
        });
    }

    updateState = ([params, prevPage, prevTerm, prevField, prevSortType, prevSortField]) => {
        const page = QueryParser.parsePage(params);
        const term = QueryParser.parseSearch(params);
        const field = QueryParser.parseSearchField(params);
        const sortType = QueryParser.parseSortType(params);
        const sortField = QueryParser.parseSortField(params);

        this.updatePage(page, prevPage);
        this.updateTerm(term, prevTerm);
        this.updateField(field, prevField);
        this.updateSortType(sortType, prevSortType);
        this.updateSortField(sortField, prevSortField);
    }

    updatePage(page: number, prevPage: number) {
        const pageMismatch = page !== prevPage;

        if (pageMismatch) {
            this.store$.dispatch(
                PostsActions.setActivePage({ page })
            );
        }
    }

    updateTerm(term: string, prevTerm: string) {
        const termMismatch = term !== prevTerm;

        if (termMismatch) {
            this.store$.dispatch(
                PostsActions.setSearchTerm({ term })
            );

            this.store$.dispatch(
                PostsActions.setActivePage({ page: 0 })
            );
        }
    }

    updateField(field: PostsSearchFieldType, prevField: PostsSearchFieldType) {
        const fieldMismatch = field !== prevField;

        if (fieldMismatch) {
            this.store$.dispatch(
                PostsActions.setSearchField({ field })
            );

            this.store$.dispatch(
                PostsActions.setActivePage({ page: 0 })
            );
        }
    }

    updateSortType(sortType: SortType, prevSortType: SortType) {
        const fieldMismatch = sortType !== prevSortType;

        if (fieldMismatch) {
            this.store$.dispatch(
                PostsActions.setSortType({ sortType })
            );
        }
    }

    updateSortField(field: PostsSortFieldType, prevField: PostsSortFieldType) {
        const fieldMismatch = field !== prevField;

        if (fieldMismatch) {
            this.store$.dispatch(
                PostsActions.setSortField({ field })
            );
        }
    }

    async clickField(field: PostsSortFieldType) {

        const currenvFieldValue = await this.sortField$.pipe(first()).toPromise();
        const currenvTypeValue = await this.sortType$.pipe(first()).toPromise();

        if (field !== currenvFieldValue) {
            this.setSortType(SortType.Asc);
            this.setSortField(field);
        } else {
            const newValue = currenvTypeValue === SortType.Desc ? SortType.Asc : SortType.Desc;
            this.setSortType(newValue);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
