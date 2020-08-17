import { Component } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
 product: Product = {
  id: '1',
  image: 'assets/images/chaleco.JPG',
  title: 'Chaleco',
  price: 80000,
  description: 'bla bla bla bla bla'
  };
}
