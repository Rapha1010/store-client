import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly notifier: NotifierService;
  constructor(private productService: ProductService, private router: Router, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  productList: ProductModel[] = [];
  productDetail: ProductModel = new ProductModel();

  ngOnInit(): void {
    this.getProductList();

    let token : string | null = sessionStorage.getItem('token');

    if (token == null) this.router.navigate(['/login']);

  }

  getProductList() {
    this.productService.getProducts().subscribe((products: ProductModel[]) => {
      products.forEach(element => {
        this.productList.push(element);
      });
    });
  }

  getProductById(id : number) {
    return this.productList.find((e)=>{ e.id === id});
  }

  logout() {
    sessionStorage.removeItem('token');
    location.reload();
  }

  openModal(id:number) : void {
    this.productDetail = this.productList.find(e=> e.id === id)!;
  }

  addModal() {
    this.productDetail = new ProductModel();
  }

  onClickEdit(form: NgForm) {
    this.productService.putProduct(this.productDetail).subscribe(({
      next: (data) => { this.notifier.notify('success', 'Produto Editado'), location.reload() },
      error: (err) => { this.notifier.notify('error', err.error.error); }
    }));
  }

  onClickAdd(form: NgForm) {

    let prod  ={
      "description" : this.productDetail.description,
      "brand" : this.productDetail.brand,
      "price" : this.productDetail.price,
    };

    this.productService.postProduct(prod).subscribe(({
      next: (data) => { this.notifier.notify('success', 'Produto adicionado'), location.reload() },
      error: (err) => { this.notifier.notify('error', err.error.error); }
    }));
  }

  deleteProd() {
    this.productService.deleteProduct(this.productDetail.id).subscribe(({
      next: (data) => { this.notifier.notify('success', 'Produto removido'), location.reload() },
      error: (err) => { this.notifier.notify('error', err.error.error); }
    }));
  }
}
