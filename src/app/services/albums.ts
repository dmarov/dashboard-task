import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiAlbum, ApiPhoto } from "@/models";
import { Observable } from "rxjs";

@Injectable()
export class AlbumsService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    getAlbums(): Observable<ApiAlbum[]> {
        return this.$http.get<ApiAlbum[]>(
            `${Constants.apiBase}/albums`
        );
    }

    getAlbum(id: number): Observable<ApiAlbum> {
        return this.$http.get<ApiAlbum>(
            `${Constants.apiBase}/albums/${id}`
        );
    }

    getAlbumPhotos(id: number): Observable<ApiPhoto[]> {
        return this.$http.get<ApiPhoto[]>(
            `${Constants.apiBase}/albums/${id}/photos`
        );
    }
}
