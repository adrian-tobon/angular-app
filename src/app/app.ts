import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hola Mundo Angular');
  enabled:boolean = false;

  courses: string[] = ['Angular', 'React', 'Springboot', 'NodeJS'];


  toggleEnabled(): void {
    this.enabled = !this.enabled;
  }

}
