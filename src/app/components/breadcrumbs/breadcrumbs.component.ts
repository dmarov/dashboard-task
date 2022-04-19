import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {

    @HostBinding('class.breadcrumbs')
    blockClass = true;
}
