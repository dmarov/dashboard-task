import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '@/core';
import { ApiPhoto } from '@/models';
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    getPhotos(): Observable<ApiPhoto[]> {
        return this.$http.get<ApiPhoto[]>(
            `${Constants.apiBase}/photos`
        );
    }

    getPhoto(id: number): Observable<ApiPhoto> {
        return this.$http.get<ApiPhoto>(
            `${Constants.apiBase}/photos/${id}`
        );
    }
}
