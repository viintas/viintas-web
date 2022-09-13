import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';
import { ProductsService } from '../../shared/services/products.service';
import { DialogBox } from '../../shared/utils/dialogbox.service';

@Component({
  selector: 'app-product-to-week',
  templateUrl: './product-to-week.component.html',
  styleUrls: ['./product-to-week.component.css']
})
export class ProductToWeekComponent implements OnInit {

  productWeekly: any;
  priceDescountProduct: number = 0;
  loader: boolean = false;

  number_week = new Date;
  days: number = 7 - this.number_week.getDay();
  hours: number = 24 - this.number_week.getHours();
  minutes: number = 60 - this.number_week.getMinutes();
  seconds: number = 60 - this.number_week.getSeconds();

  constructor(
    public dialogBox: DialogBox,
    private _productsService: ProductsService,
    private _helperShopping: HelperShoppingService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    // this.productWeekly.fields.pvp_unitary = this.priceDescountProduct;
  }
  
  public getTime() {
    let timeFinish = Math.floor(new Date().getTime() / 1000) + 604800;
    console.log(timeFinish);
    return timeFinish;
  }
  
  changeProductAmount() {
    this._helperShopping.changeMessage(this.productWeekly);
  }
  
  addAmount() {
    this.productWeekly.fields.amount++;
    this._helperShopping.changeMessage(this.productWeekly);
  }
  
  subtractAmount() {
    if (this.productWeekly.fields.amount > 0) {
      this.productWeekly.fields.amount--;
      this._helperShopping.changeMessage(this.productWeekly);
    }
  }

  loadProducts() {
    this.loader = true;
    this._productsService.getProductWeekly().subscribe(
      data => {
        this.productWeekly = data.records[0];
        this.priceDescountProduct = this.productWeekly.fields.pvp_unitary - (this.productWeekly.fields.pvp_unitary * this.productWeekly.fields.discount)
        this.productWeekly.fields.amount = 0;
        this.loader = false;
      }
    )
  }
}
