import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApiPost, PostsSearchFieldType, PostsSortFieldType, SortType } from '@/models';
import { PostsSelectors, RouterSelectors } from '@/store/selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, first } from 'rxjs/operators';

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

        this.hookRouteParams();
    }

    private hookRouteParams() {
        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchTerm),
            ).subscribe(term => {
                this.store$.dispatch(
                    PostsActions.setSearchTerm({ term })
                );

                this.store$.dispatch(
                    PostsActions.setActivePage({ page: 0 })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSearchField),
                distinctUntilChanged(),
            ).subscribe(field => {
                this.store$.dispatch(
                    PostsActions.setSearchField({ field })
                );

                this.store$.dispatch(
                    PostsActions.setActivePage({ page: 0 })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectPage),
                distinctUntilChanged(),
            ).subscribe(page => {
                this.store$.dispatch(
                    PostsActions.setActivePage({ page })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSortType),
                distinctUntilChanged(),
            ).subscribe(sortType => {
                this.store$.dispatch(
                    PostsActions.setSortType({ sortType })
                );
            })
        );

        this.subscription.add(
            this.store$.pipe(
                select(RouterSelectors.selectSortField),
                distinctUntilChanged(),
            ).subscribe(field => {
                this.store$.dispatch(
                    PostsActions.setSortField({ field })
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
