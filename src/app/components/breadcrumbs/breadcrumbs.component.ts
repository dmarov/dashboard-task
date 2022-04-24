import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

    @HostBinding('class.breadcrumbs')
    blockClass = true;

    paths: string[] = [];

    ngOnInit(): void {
        const path = window.location.pathname;
        const parts = path.split('/').map(p => p.replace('/', ''));
        let cumulative = '';

        for (const part of parts) {
            if (part) {
                cumulative += '/' + part;
                this.paths.push(cumulative);
            }
        }
    }
}
