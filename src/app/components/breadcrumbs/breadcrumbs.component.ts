import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

    @HostBinding('class.breadcrumbs')
    blockClass = true;

    ngOnInit(): void {
        const path = window.location.pathname;
    }
}
