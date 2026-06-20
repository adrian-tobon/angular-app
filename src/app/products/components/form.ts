import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css'],
})
export class Form {

  @Input() product: Product = {
            id:0,
            name:'',
            price:0,
            description:''  
        };
        
        @Output() newProductEvent = new EventEmitter<Product>();


        AddProduct(): void {
            console.log('Product added:', this.product);
            this.newProductEvent.emit(this.product);            
        }

        cleanProduct(): void {
            this.product = {
                id:0,
                name:'',
                price:0,
                description:''  
            };
        }
}
