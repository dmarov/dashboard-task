import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPost } from "@/models";
import { PostsSelectors } from "@/store/selectors";

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

    constructor(
        private readonly store$: Store,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PostsActions.loadPosts());

        this.posts$ = this.store$.pipe(
            select(PostsSelectors.selectCurrentPostsPage)
        );

        this.isLoading$ = this.store$.pipe(
            select(PostsSelectors.selectIsLoading)
        );
    }
}
