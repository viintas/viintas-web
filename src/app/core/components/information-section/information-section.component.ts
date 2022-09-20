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
        img:'./../../../../assets/img/undraw_ideas_flow_re_bmea.svg',
        title:'Ventas al por mayor',
        paragraph:'Compra más de 6 productos y recibe el precio al por mayor'
      },
      {
        img:'./../../../../assets/img/undraw_mobile_interface_re_1vv9.svg',
        title:'New feactures',
        paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi autem'
      },
      {
        img:'./../../../../assets/img/undraw_reading_time_re_phf7.svg',
        title:'Productos Especiales',
        paragraph:'Todas las semanas será seleccionado un nuevo producto con aun más descuento'
      }
    ]
  }
}
