import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-section',
  templateUrl: './information-section.component.html',
  styleUrls: ['./information-section.component.css']
})
export class InformationSectionComponent implements OnInit {

  constructor() { }

  information: any;

  ngOnInit(): void {
    this.information = [
      {
        img:'./../../../../assets/img/wholesale.svg',
        title:'Ventas al por mayor',
        paragraph:'Compra más de 6 productos y recibe el precio al por mayor'
      },
      {
        img:'./../../../../assets/img/entrepreneurs.svg',
        title:'New feactures',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi autem'
      },
      {
        img:'./../../../../assets/img/productToWeek.svg',
        title:'Productos Especiales',
        paragraph:'Todas las semanas será seleccionado un nuevo producto con aun más descuento'
      }
    ]
  }
}
