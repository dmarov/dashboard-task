import { Component, HostBinding } from '@angular/core';

import { Link } from '@/models';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

    @HostBinding('class.side-menu')
    blockClass = true;

    links: Link[] = [
        new Link('/dashboard', 'Dashboard'),
        new Link('/posts', 'Posts'),
        new Link('/albums', 'Albums'),
        new Link('/photos', 'Photos'),
    ];
}
