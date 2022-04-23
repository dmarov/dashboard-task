import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAlbum, ApiPost, ApiUser } from "@/models";
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@/services';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-page-user',
    templateUrl: './page-user.component.html',
    styleUrls: ['./page-user.component.scss'],
})
export class PageUserComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-user')
    pageClass = true;

    user$: Observable<ApiUser>;
    description$: Observable<string>;
    albums$: Observable<ApiAlbum[]>;
    posts$: Observable<ApiPost[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.user$ = this.usersService.getUser(id);

        this.description$ = this.user$.pipe(
            map(user => {
                return `@${user.username} - ${user.email} - ${user.website} - ${user.company.name} - ${user.address.city}`;
            })
        );

        this.albums$ = this.usersService.getUserAlbums(id);
        this.posts$ = this.usersService.getUserPosts(id);
    }
}
