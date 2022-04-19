import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-page-dashboard',
    templateUrl: './page-dashboard.component.html',
    styleUrls: ['./page-dashboard.component.scss'],
})
export class PageDashboardComponent {

    @HostBinding('class.page')
    pageClass = true;
}
