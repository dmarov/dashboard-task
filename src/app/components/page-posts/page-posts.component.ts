import {PostsActions} from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-page-posts',
    templateUrl: './page-posts.component.html',
    styleUrls: ['./page-posts.component.scss'],
})
export class PagePostsComponent implements OnInit {

    @HostBinding('class.page')
    pageClass = true;

    constructor(
        private readonly store$: Store,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PostsActions.loadPosts());
    }
}
