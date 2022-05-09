import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PageAlbumStore } from './page-album.store';

@Component({
    selector: 'app-page-album',
    templateUrl: './page-album.component.html',
    styleUrls: ['./page-album.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        PageAlbumStore,
    ],
})
export class PageAlbumComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-album')
    pageClass = true;

    album$ = this.localStore.album$;
    filteredPhotos$ = this.localStore.filteredPhotos$;
    searchTerm$ = this.localStore.searchTerm$;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
        private readonly localStore: PageAlbumStore,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.localStore.init(of(id));
    }

    setSearchTerm(term: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { search: term },
            queryParamsHandling: 'merge',
        });
    }
}
