import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

   private products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 5.99, description: 'Description of Product 3' },
  ];
    constructor() { }
}
