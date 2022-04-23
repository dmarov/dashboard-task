import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUser } from "@/models";
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@/services';

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

    constructor(
        private activatedRoute: ActivatedRoute,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.user$ = this.usersService.getUser(id);
    }
}
