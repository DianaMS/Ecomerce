import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  items = ['diana', 'ana', 'mateo'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/chaleco.JPG',
      title: 'Chaleco',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/falda.JPG',
      title: 'Falda',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/sudadera.JPG',
      title: 'Sudadera',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/sweater.JPG',
      title: 'Sweater',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/top.JPG',
      title: 'Top',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/vestido.JPG',
      title: 'Vestido',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];


  addItem(): void{
    this.items.push('nuevoNombre');
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
