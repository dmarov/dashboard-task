import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiAlbum, ApiPhoto } from "@/models";
import { ActivatedRoute, Router } from '@angular/router';
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
    photos$: Observable<ApiPhoto[]>;
    searchTerm$: Observable<string>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private albumsService: AlbumsService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.album$ = this.albumsService.getAlbum(id);
        this.photos$ = this.albumsService.getAlbumPhotos(id);
    }

    setSearchTerm(term: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { search: term },
            queryParamsHandling: 'merge',
        });
    }
}
