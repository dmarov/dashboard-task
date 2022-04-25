import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiPhoto } from '@/models';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '@/services';

@Component({
    selector: 'app-page-photo',
    templateUrl: './page-photo.component.html',
    styleUrls: ['./page-photo.component.scss'],
})
export class PagePhotoComponent implements OnInit {

    @HostBinding('class.page')
    @HostBinding('class.page-photo')
    pageClass = true;

    photo$: Observable<ApiPhoto>;

    subscription = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,
        private photosService: PhotosService,
    ) { }

    ngOnInit(): void {
        const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.photo$ = this.photosService.getPhoto(id);
    }
}
