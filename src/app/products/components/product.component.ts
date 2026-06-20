import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { RouterOutlet } from '@angular/router';
import { Form } from './form';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterOutlet,Form],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  productSelected: Product = new Product();

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(products => {
      this.products = products;
    });
  }

  addProductHandler(newProduct: Product): void {

    if(newProduct.id > 0){   
    
      this.products = this.products.map(p => {
        if(p.id === newProduct.id) {
          return newProduct;
        } else {
          return p;
        }
    });      
     
    }else{
      //newProduct.id = this.products.length + 1;
      //this.products.push(newProduct);//mutable
      this.products = [...this.products, {... newProduct,id: this.products.length + 1}]; //inmutable      
    }
    this.productSelected = new Product();
  }

  editProduct(product: Product): void {
    //this.productSelected = product; //mutable
    this.productSelected = { ...product }; //inmutable
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
