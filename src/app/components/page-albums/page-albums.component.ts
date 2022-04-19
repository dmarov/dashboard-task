import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-albums',
    templateUrl: './page-albums.component.html',
    styleUrls: ['./page-albums.component.scss'],
})
export class PageAlbumsComponent {

    @HostBinding('class.page')
    pageClass = true;
}
