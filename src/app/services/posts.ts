import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiPost } from "@/models";

@Injectable()
export class PostsService {

    constructor(
        private readonly $http: HttpClient,
    ) { }

    async getPosts(): Promise<ApiPost[]> {
        return this.$http.get<ApiPost[]>(
            `${Constants.apiBase}/posts`
        ).toPromise();
    }

    async getPost(id: number): Promise<ApiPost> {
        return this.$http.get<ApiPost>(
            `${Constants.apiBase}/posts/${id}`
        ).toPromise();
    }
}
