import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-layout-page-generic',
    templateUrl: './layout-page-generic.component.html',
    styleUrls: ['./layout-page-generic.component.scss'],
})
export class LayoutPageGenericComponent {

    @HostBinding('class.layout-page-generic')
    blockClass = true;
}
