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
        let bearer = sessionStorage.getItem("token");
        headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${bearer}`);
        return this.httpClient.get<ProductModel[]>(environment.apiUrl + "/products", { headers: headers });
    }

}