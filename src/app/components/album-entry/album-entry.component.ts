import { ApiAlbum } from '@/models';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'app-album-entry',
    templateUrl: './album-entry.component.html',
    styleUrls: ['./album-entry.component.scss'],
})
export class AlbumEntryComponent {
    @HostBinding('class.album-entry')
    blockClass = true;

    @Input()
    album: ApiAlbum;
}
