import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ProductModel } from '../models/ProductModel';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    headers = new HttpHeaders();
    bearer = sessionStorage.getItem("token");

    constructor(private router: Router,
        private httpClient: HttpClient) {
    }

    getProducts = () => {
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${this.bearer}`);
        return this.httpClient.get<ProductModel[]>(environment.apiUrl + "/products", { headers: this.headers });
    }

    putProduct = (product: ProductModel) => {
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${this.bearer}`);
        return this.httpClient.put(environment.apiUrl + `/products/${product.id}`, product, { headers: this.headers });
    }

    postProduct = (product: any) => {
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${this.bearer}`);
        return this.httpClient.post(environment.apiUrl + `/products`, product, { headers: this.headers });
    }

    deleteProduct = (id: number) => {
        this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization', `Bearer ${this.bearer}`);
        return this.httpClient.delete<ProductModel[]>(environment.apiUrl + `/products/${id}`,  { headers: this.headers })
    }
}