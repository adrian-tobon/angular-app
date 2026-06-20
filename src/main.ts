import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ProductComponent } from './app/products/components/product.component';

bootstrapApplication(ProductComponent, appConfig)
  .catch((err) => console.error(err));
