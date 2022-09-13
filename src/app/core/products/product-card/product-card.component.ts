import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models/category';
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
  @Input() loader: boolean | undefined;

  listProductsSelected: any[] = [];
  load:boolean = false;

  ngOnInit(): void {
    this.product.fields.amount = 0;
  }

  // changeMessage(sendProduct:object){
  //   this._helperShopping.changeMessage(sendProduct);
  // }

  changeProductAmount() {
    this._helperShopping.changeMessage(this.product);
  }

  addAmount() {
    this.product.fields.amount++;
    this._helperShopping.changeMessage(this.product);
  }

  subtractAmount() {
    if (this.product.fields.amount > 0) {
      this.product.fields.amount--;
      this._helperShopping.changeMessage(this.product);
    }
  }

}
