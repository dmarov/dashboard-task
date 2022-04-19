import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-photos',
    templateUrl: './page-photos.component.html',
    styleUrls: ['./page-photos.component.scss'],
})
export class PagePhotosComponent {

    @HostBinding('class.page')
    pageClass = true;
}
