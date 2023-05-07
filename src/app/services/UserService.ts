import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { UserModel } from '../models/UserModel';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router, private httpClient: HttpClient) { }

    signIn = (login:string, password:string) => {
        return this.httpClient.post<any>(environment.apiUrl + "/security/login", {login, password});
    }

}