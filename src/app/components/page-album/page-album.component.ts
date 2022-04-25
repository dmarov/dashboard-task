import { Component, HostBinding, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { ApiAlbum, ApiPhoto } from '@/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '@/services';
import { map, withLatestFrom } from 'rxjs/operators';
import { QueryParser } from '@/utils';
import { ApiPhotosTitleCollectionFilter } from '@/core/collection-filters';

@Component({
    selector: 'app-page-album',
    templateUrl: './page-album.component.html',
    styleUrls: ['./page-album.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PageAlbumComponent implements OnInit, OnDestroy {

    @HostBinding('class.page')
    @HostBinding('class.page-album')
    pageClass = true;

    album$: Observable<ApiAlbum>;
    photos$: Observable<ApiPhoto[]>;
    filteredPhotos$: Observable<ApiPhoto[]>;
    searchTerm$ = new BehaviorSubject<string>('');

    subscription = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private albumsService: AlbumsService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.album$ = this.albumsService.getAlbum(id);
        this.photos$ = this.albumsService.getAlbumPhotos(id);

        this.filteredPhotos$ = combineLatest([this.searchTerm$, this.photos$]).pipe(
            map(([term, photos]) => {
                if (term) {
                    const filter = new ApiPhotosTitleCollectionFilter(term);
                    return photos.filter(p => filter.matches(p));
                }

                return photos;
            })
        );

        this.subscription.add(
            this.activatedRoute
                .queryParamMap.pipe(
                    withLatestFrom(
                        this.searchTerm$,
                    )
                ).subscribe(this.updateState)
        );
    }

    updateState = ([params, prevTerm]) => {
        const term = QueryParser.parseSearch(params);
        this.updateTerm(term, prevTerm);
    }

    updateTerm(term: string, prevTerm: string) {
        const termMismatch = term !== prevTerm;

        if (termMismatch) {
            this.searchTerm$.next(term);
        }
    }

    setSearchTerm(term: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: { search: term },
            queryParamsHandling: 'merge',
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
