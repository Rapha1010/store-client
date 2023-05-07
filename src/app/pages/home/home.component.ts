import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService : ProductService) { }

  productList: Array<any> = [];

  ngOnInit(): void {

    this.getProductList();

  }

  getProductList() {

    this.productService.getProducts().subscribe((data:any) => {

      let products : ProductModel[] = data.products;

      products.forEach(element => {

        console.log(element);
      });

    });

  }

}
