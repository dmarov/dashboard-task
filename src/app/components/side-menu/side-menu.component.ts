import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

    @HostBinding('class.side-menu')
    blockClass = true;

}
