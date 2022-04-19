import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent {

    @HostBinding('class.layout-page')
    blockClass = true;
}
