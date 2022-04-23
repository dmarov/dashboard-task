import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-layout-page-bold-header',
    templateUrl: './layout-page-bold-header.component.html',
    styleUrls: ['./layout-page-bold-header.component.scss'],
})
export class LayoutPageBoldHeaderComponent {

    @HostBinding('class.layout-page-bold-header')
    blockClass = true;
}
