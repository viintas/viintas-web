import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
import { CategoryService } from '../../shared/services/category.service';
import { DialogBox } from '../../shared/utils/dialogbox.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public dialogBox: DialogBox) { }

  @Input() product :any;
  @Input() category: Category | undefined;

  categories:any;
  listProductsFavorites: any[] = [];
  listProductsSelected: any[] = [];

  ngOnInit(): void {
    console.log(this.category)
  }

  deleteProduct(id:string){
    this.listProductsSelected.forEach( (element,index) => {
      if (element.id == id) {
        this.listProductsSelected.splice(index,1)
      }
    } )
  }

  addProduct(product:any){
    this.listProductsSelected.push(product);
    //this.product = {};
  }

}
