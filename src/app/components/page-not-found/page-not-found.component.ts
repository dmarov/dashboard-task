import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {

    @HostBinding('class.page')
    @HostBinding('class.page-not-found')
    pageClass = true;
}
