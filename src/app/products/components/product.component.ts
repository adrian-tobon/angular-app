import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  constructor(private service: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(products => {     
      this.products = products;
      this.cdr.detectChanges();
    });
  }

  addProductHandler(newProduct: Product): void {

   /* if(newProduct.id > 0){   
    
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
    this.productSelected = new Product();*/

    if(newProduct.id > 0){
      this.service.editProduct(newProduct).subscribe(updatedProduct => {
        this.products = this.products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
        this.cdr.detectChanges();
      });
    } else {
      newProduct.id = this.products.length + 1;
      this.service.createProduct(newProduct).subscribe(createdProduct => {
        this.products = [...this.products, createdProduct];
        this.cdr.detectChanges();
      });
    }
  }
  editProduct(product: Product): void {
    //this.productSelected = product; //mutable
    this.productSelected = { ...product }; //inmutable    
  }

  deleteProduct(id: number): void {
    //this.products = this.products.filter(p => p.id !== id);
    this.service.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
      this.cdr.detectChanges();
    });
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
