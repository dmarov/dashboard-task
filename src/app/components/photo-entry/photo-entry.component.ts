import { ApiPhoto } from '@/models';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-photo-entry',
    templateUrl: './photo-entry.component.html',
    styleUrls: ['./photo-entry.component.scss'],
})
export class PhotoEntryComponent {
    @HostBinding('class.photo-entry')
    blockClass = true;

    @Input()
    photo: ApiPhoto;
}
