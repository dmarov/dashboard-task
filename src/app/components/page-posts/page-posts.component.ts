import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ApiPost, PostsSearchFieldType } from "@/models";
import { PostsSelectors } from "@/store/selectors";
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParser } from '@/utils';

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

    searchTerm = ''
    searchField = PostsSearchFieldType.User;

    searchFieldTypes = PostsSearchFieldType;

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

        this.subscription.add(
            this.activatedRoute
                .queryParamMap
                .subscribe(params => {
                    this.store$.dispatch(
                        PostsActions.setActivePage({
                            page: QueryParser.parsePage(params)
                        })
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
