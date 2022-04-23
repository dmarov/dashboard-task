import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAlbum } from "@/models";
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '@/services';

@Component({
    selector: 'app-page-album',
    templateUrl: './page-album.component.html',
    styleUrls: ['./page-album.component.scss'],
})
export class PageAlbumComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-album')
    pageClass = true;

    album$: Observable<ApiAlbum>;

    constructor(
        private route: ActivatedRoute,
        private albumsService: AlbumsService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.album$ = this.albumsService.getAlbum(id);
    }
}
