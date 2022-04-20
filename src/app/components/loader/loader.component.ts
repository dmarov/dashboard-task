import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
    @HostBinding('class.loader')
    blockClass = true;
}
