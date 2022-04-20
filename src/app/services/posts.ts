import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiPost } from "@/models";
import {Observable} from "rxjs";

@Injectable()
export class PostsService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    getPosts(): Observable<ApiPost[]> {
        return this.$http.get<ApiPost[]>(
            `${Constants.apiBase}/posts`
        );
    }

    getPost(id: number): Observable<ApiPost> {
        return this.$http.get<ApiPost>(
            `${Constants.apiBase}/posts/${id}`
        );
    }
}
