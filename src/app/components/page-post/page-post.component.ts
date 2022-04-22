import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPost, PostsSearchFieldType } from "@/models";
import { PostsSelectors } from "@/store/selectors";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-post',
    templateUrl: './page-post.component.html',
    styleUrls: ['./page-post.component.scss'],
})
export class PagePostComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-post')
    pageClass = true;

    post$: Observable<ApiPost>;

    constructor(
        private readonly store$: Store,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PostsActions.loadPosts());
        const id = parseInt(this.route.snapshot.paramMap.get('id'));

        this.post$ = this.store$.pipe(
            select(PostsSelectors.selectPostById, { id })
        );
    }
}
