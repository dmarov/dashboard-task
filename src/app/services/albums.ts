import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiAlbum } from "@/models";
import { Observable } from "rxjs";

@Injectable()
export class AlbumsService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    getPosts(): Observable<ApiAlbum[]> {
        return this.$http.get<ApiAlbum[]>(
            `${Constants.apiBase}/albums`
        );
    }

    getPost(id: number): Observable<ApiAlbum> {
        return this.$http.get<ApiAlbum>(
            `${Constants.apiBase}/albums/${id}`
        );
    }
}
