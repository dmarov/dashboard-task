import { ApiAlbum, ApiPhoto } from '@/models';
import { AlbumsService } from '@/services';
import { Component, HostBinding, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    photos$: Observable<ApiPhoto[]>;
    truncatedPhotos$: Observable<ApiPhoto[]>;

    constructor(
        private albumsService: AlbumsService,
    ) { }

    ngOnInit(): void {
        this.photos$ = this.albumsService.getAlbumPhotos(this.album.id);
        this.truncatedPhotos$ = this.photos$.pipe(
            map(photos => photos.slice(0, 4))
        );
    }
}
