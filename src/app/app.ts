import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/components/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Hola Mundo Angular');
  enabled:boolean = false;

  courses: string[] = ['Angular', 'React', 'Springboot', 'NodeJS'];


  toggleEnabled(): void {
    this.enabled = !this.enabled;
  }

}
