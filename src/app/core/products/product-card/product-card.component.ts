import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
import { CategoryService } from '../../shared/services/category.service';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';
import { DialogBox } from '../../shared/utils/dialogbox.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(
    public dialogBox: DialogBox,
    private _helperShopping: HelperShoppingService
    ) { }

  @Input() product: any;
  @Input() category: Category | undefined;

  message: object = {};
  categories: any;
  listProductsFavorites: any[] = [];
  listProductsSelected: any[] = [];
  cantProduct: number = 0;

  ngOnInit(): void {
    console.log(this.category);
    this._helperShopping.customMessage.subscribe(msg => this.message = msg);
  }

  changeMessage(sendProduct:object){
    this._helperShopping.changeMessage(sendProduct);
  }

  addAmount() {
    this.product.amount = this.cantProduct + 1;
    this.changeMessage(this.product);
    this.cantProduct++;
  }

  subtractAmount() {
    this.cantProduct > 0 ? this.cantProduct-- : ""
  }

  deleteProduct(id: string) {
    this.listProductsSelected.forEach((element, index) => {
      if (element.id == id) {
        this.listProductsSelected.splice(index, 1)
      }
    })
  }

  addProduct(product: any) {
    this.listProductsSelected.push(product);
    //this.product = {};
  }

}
