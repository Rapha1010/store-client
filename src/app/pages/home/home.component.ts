import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  productList: ProductModel[] = [];

  ngOnInit(): void {
    this.getProductList();

    let token : string | null = sessionStorage.getItem('token');

    if (token == null) this.router.navigate(['/login']);

  }

  getProductList() {
    this.productService.getProducts().subscribe((data: any) => {
      let products: ProductModel[] = data.products;
      products.forEach(element => {
        this.productList.push(element);
      });
    });
  }

  logout() {
    sessionStorage.removeItem('token');
    location.reload();
  }
}
