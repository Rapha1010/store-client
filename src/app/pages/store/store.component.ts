import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productService: ProductService) { }

  productList: ProductModel[] = [];
  filterTerm : string = ''


  ngOnInit(): void {
    this.getProductList();

    
  }

  getProductList() {
    this.productList = [];
    this.productService.getProducts().subscribe((products: ProductModel[]) => {
      products.forEach(element => {
        this.productList.push(element);
      });
    });
  }

  search() {
    if (this.filterTerm == '') this.getProductList();

    this.productList = this.productList.filter((e) => { return e.description.toLowerCase().includes(this.filterTerm.toLowerCase())});
  }

}
