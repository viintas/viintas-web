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

  cantProduct: number = 0;
  listProducts: Product[] = [];
  productWeekly: any;

  number_week = new Date;
  days: number = 7 - this.number_week.getDay();
  hours: number = 24 - this.number_week.getHours();
  minutes: number = 60 - this.number_week.getMinutes();
  seconds: number = 60 - this.number_week.getSeconds();

  @Input() product: any;
  @Output() cantProductGlobal = new EventEmitter<number>();

  constructor(
    public dialogBox: DialogBox,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  public getTime() {
    let timeFinish = Math.floor(new Date().getTime() / 1000) + 604800;
    console.log(timeFinish);
    return timeFinish;
  }
  public onfinish() { }

  addAmount() {
    this.cantProduct++;
    this.cantProductGlobal.emit(this.cantProduct);
  }

  subtractAmount() {
    this.cantProduct > 0 ? this.cantProduct-- : ""
  }

  loadProducts() {
    this._productsService.getProducts().subscribe(
      data => {
        this.productWeekly = data.records[1];
        // console.log("---------");
        // console.log(this.productWeekly);
        // console.log(this.productWeekly.fields.image[0].url);
        // console.log("---------");
      }
    )
  }



  // loadProductWeekly(){
  //   this.listProducts.forEach((element: any) => {
  //     if (element.fields.weekly_option) {
  //       this.productWeekly = element;
  //     }
  //   })
  //   console.log("----");
  //   console.log(this.listProducts);
  //   console.log("----");
  // }


}
