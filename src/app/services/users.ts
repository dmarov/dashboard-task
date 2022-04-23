import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiAlbum, ApiPost, ApiUser } from "@/models";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    getUser(id: number): Observable<ApiUser> {
        return this.$http.get<ApiUser>(
            `${Constants.apiBase}/users/${id}`
        );
    }

    getUserAlbums(id: number): Observable<ApiAlbum[]> {
        return this.$http.get<ApiAlbum[]>(
            `${Constants.apiBase}/users/${id}/albums`
        );
    }

    getUserPosts(id: number): Observable<ApiPost[]> {
        return this.$http.get<ApiPost[]>(
            `${Constants.apiBase}/users/${id}/posts`
        );
    }
}
