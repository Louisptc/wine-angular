import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {


  products: any = [
    { 
      id: 1,
      name: 'Château Margaux',
      price: 299.99,
      image: 'assets/images/wine1.png'
    },
    { 
      id: 2,
      name: 'Barolo',
      price: 89.99,
      image: 'assets/images/wine2.jpg'
    },
    { 
      id: 3,
      name: 'Napa Valley Cabernet Sauvignon',
      price: 149.99,
      image: 'assets/images/wine3.jpg'
    },
    { 
      id: 4,
      name: 'Rioja Gran Reserva',
      price: 59.99,
      image: './assets/images/wine4.jpg'
    }
  ];

}
