import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-posts',
    templateUrl: './page-posts.component.html',
    styleUrls: ['./page-posts.component.scss'],
})
export class PagePostsComponent {

    @HostBinding('class.page')
    pageClass = true;
}
