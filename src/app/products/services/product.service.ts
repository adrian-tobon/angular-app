import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {

   private products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 5.99, description: 'Description of Product 3' },
  ];

  private url: string = 'http://localhost/products';

  constructor(private http: HttpClient) { }

    findAll(): Observable<Product[]> {
      //return of(this.products);
      return this.http.get(this.url).pipe(map((response: any) => response._embedded.products as Product[]));
    }

    findById(id: number): Observable<Product> {
      //const product = this.products.find(p => p.id === id);
      //return of(product!);
      return this.http.get<Product>(`${this.url}/${id}`);
    }

    editProduct(product: Product): Observable<Product> {
      //const index = this.products.findIndex(p => p.id === product.id);
      //if (index !== -1) {
      //  this.products[index] = product;
      //}
      //return of(product);
      return this.http.put<Product>(`${this.url}/${product.id}`, product);
    }

    createProduct(product: Product): Observable<Product> {
      //const newProduct = { ...product, id: this.products.length + 1 };
      //this.products.push(newProduct);
      //return of(newProduct);
      return this.http.post<Product>(this.url, product);
    }

    deleteProduct(id: number): Observable<void> {
      //this.products = this.products.filter(p => p.id !== id);
      //return of();
      return this.http.delete<void>(`${this.url}/${id}`);
    } 
}
