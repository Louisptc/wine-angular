import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  wine: any;
  wines = [
    { 
      id: 1,
      name: 'Château Margaux',
      price: 299,
      description: 'Le Château Margaux est un vin rouge français produit dans la région de Bordeaux. Il est célèbre pour son bouquet complexe, sa couleur profonde et son goût riche et velouté. Les arômes dominants incluent les fruits rouges, les épices et les notes de cèdre. Ce vin est considéré comme l\'un des meilleurs vins au monde et est souvent associé aux grands crus classés de Bordeaux.',
      image: 'assets/images/wine1.png'
    },
    { 
      id: 2,
      name: 'Barolo',
      price: 89,
      description: 'Le Barolo est un vin italien produit dans la région du Piémont. Il est élaboré à partir du cépage Nebbiolo et est connu pour sa structure tannique robuste, son bouquet complexe et ses arômes distinctifs de cerise, de truffe et de roses. Ce vin est souvent décrit comme puissant et élégant, et il est considéré comme l\'un des plus grands vins rouges d\'Italie.',
      image: 'assets/images/wine2.jpg'
    },
    { 
      id: 3,
      name: 'Napa Valley Cabernet Sauvignon',
      price: 149,
      description: 'Le Napa Valley Cabernet Sauvignon est un vin rouge américain produit dans la région viticole de Napa Valley, en Californie. Il est principalement élaboré à partir du cépage Cabernet Sauvignon et est apprécié pour son corps corsé, ses tanins souples et ses arômes de fruits noirs, de cassis, de vanille et de chêne. Ce vin est considéré comme l\'un des meilleurs vins de Californie et est souvent associé à des vignerons renommés de la région.',
      image: 'assets/images/wine3.jpg'

    },
    { 
      id: 4,
      name: 'Rioja Gran Reserva',
      price: 59,
      description: 'Le Rioja Gran Reserva est un vin rouge espagnol produit dans la région viticole de Rioja. Il est élaboré à partir du cépage Tempranillo et est vieilli pendant une période prolongée en fûts de chêne et en bouteille. Ce vin se distingue par sa complexité, ses arômes de fruits mûrs, d\'épices, de vanille et de tabac, ainsi que par sa structure tannique équilibrée. Le Rioja Gran Reserva est considéré comme l\'un des vins les plus emblématiques d\'Espagne.',
      image: 'assets/images/wine4.jpg'
    }
  ];

  constructor(
    private route: ActivatedRoute
  ) {}
  
  ngOnInit() {
    this.getWine();
  }

  getWine(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    this.wine = this.wines.find(wine => wine.id === id);
  }
  
  

}
