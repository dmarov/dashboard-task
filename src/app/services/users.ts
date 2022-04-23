import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Constants } from "@/core";
import { ApiUser } from "@/models";
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
}
