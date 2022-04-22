import { PostsActions } from '@/store/actions';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiPost } from "@/models";
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '@/services';

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
        private postsService: PostsService,
    ) { }

    ngOnInit(): void {
        this.store$.dispatch(PostsActions.loadPosts());
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.post$ = this.postsService.getPost(id);
    }
}
