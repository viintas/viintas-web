import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  card: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.card = [
      {
        time: "10000",
        title: "Todo lo que buscas",
        subTitle: "Productos",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum nulla, nisi voluptatibus facilis ad perferendis alias ex voluptatum unde.",
        nameImage: "",
        image: "https://drive.google.com/uc?export=view&id=16rIAJGXSuTYI3xXFchSASU8KfE12-6tr",
        path: "M501.97,-6.41 C226.01,-57.72 330.41,-146.53 217.55,196.88 L500.00,150.00 L561.79,16.28 Z",
        textBottom: "Leer más",
        hideCarouselControl: false,
        hrefBottom: "",
        type:"two"
      },
      {
        time: "10000",
        title: "Todo lo que buscas",
        subTitle: "Productos",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum nulla, nisi voluptatibus facilis ad perferendis alias ex voluptatum unde.",
        nameImage: "",
        image: "https://drive.google.com/uc?export=view&id=16rIAJGXSuTYI3xXFchSASU8KfE12-6tr",
        path: "M501.97,-6.41 C226.01,-57.72 330.41,-146.53 217.55,196.88 L500.00,150.00 L561.79,16.28 Z",
        textBottom: "Leer más",
        hideCarouselControl: false,
        hrefBottom: "",
        type:"one"
      }
      ,
      {
        time: "10000",
        title: "Todo lo que buscas",
        subTitle: "Productos",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum nulla, nisi voluptatibus facilis ad perferendis alias ex voluptatum unde.",
        nameImage: "",
        image: "https://drive.google.com/uc?export=view&id=16rIAJGXSuTYI3xXFchSASU8KfE12-6tr",
        path: "M501.97,-6.41 C226.01,-57.72 330.41,-146.53 217.55,196.88 L500.00,150.00 L561.79,16.28 Z",
        textBottom: "Leer más",
        hideCarouselControl: false,
        hrefBottom: "",
        type:"two"
      }
    ]
  }


}
