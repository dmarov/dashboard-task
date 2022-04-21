import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPost } from "@/models";
import { PostsSelectors } from "@/store/selectors";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-page-posts',
    templateUrl: './page-posts.component.html',
    styleUrls: ['./page-posts.component.scss'],
})
export class PagePostsComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-posts')
    pageClass = true;

    posts$: Observable<ApiPost[]>;

    isLoading$: Observable<boolean>;

    totalPages$: Observable<number>;
    activePage$: Observable<number>;

    constructor(
        private readonly store$: Store,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        // const url = new URL(window.location.href);
        // const pageStr = url.searchParams.get('page');
        // console.log(pageStr);
        // const page = pageStr !== null ? parseInt(pageStr) : 0;

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
    }

    go(page: number) {
        this.store$.dispatch(PostsActions.setActivePage({ page }));
        // const url = new URL(window.location.href);
        // this.router.navigate([], {
        //     relativeTo: this.activatedRoute,
        //     queryParams: { ...url.searchParams, page },
        //     queryParamsHandling: 'merge',
        // });
    }
}
