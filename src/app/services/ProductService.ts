import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ProductModel } from '../models/ProductModel';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private router: Router,
        private httpClient: HttpClient) { }

    getProducts = () => {

        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjgzMzk2NzE1LCJleHAiOjE2ODM0MDAzMTV9.LyDpafmp5pMWNzZwLsa-mCkSR2hOKc_8qyhdjBWsKC4');


        return this.httpClient.get<any>(environment.apiUrl + "/products", {headers: headers});
    }

}