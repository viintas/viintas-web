import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';
import { SendProductsService } from '../../shared/services/sendProducts.services';

interface ProductShopping {
  id: string;
  name: string;
  pvp_unitary: string;
  image: string;
  amount: string;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  @Output() totalProducts = new EventEmitter<number>();

  totalPrice: number = 0;
  listProductsShopping: any[] = [];
  message: any = {};
  pruebaProduct: any | undefined;

  constructor(private _helperShopping: HelperShoppingService,
    private _sendProductsServices: SendProductsService) { }

  ngOnInit(): void {
    this.listProductChosen();
  }

  actualPrice(product: any): number {
    if (product.fields.amount >= 6 && product.fields.discount) {
      return (product.fields.pvp_wholesale - (product.fields.pvp_wholesale * product.fields.discount));
    } else if (product.fields.amount >= 6) {
      return product.fields.pvp_wholesale;
    } else if (product.fields.discount) {
      return (product.fields.pvp_unitary - (product.fields.pvp_unitary * product.fields.discount));
    } else {
      return product.fields.pvp_unitary;
    }
  }

  sendTotalCantProducts() {
    let totalAmountProducts = 0;
    this.listProductsShopping.forEach(product => totalAmountProducts += product.fields.amount)
    this.totalProducts.emit(totalAmountProducts);
  }

  sendListProducts() {
    this._sendProductsServices.changeListProducts(this.listProductsShopping)
  }

  totalPriceProducts() {
    this.totalPrice = 0;
    this.listProductsShopping.forEach(element => {
      if (element.fields.discount && element.fields.amount >= 6) {
        this.totalPrice = this.totalPrice + ((element.fields.pvp_unitary - element.fields.pvp_wholesale * element.fields.discount) * element.fields.amount);
      } else if (element.fields.discount) {
        this.totalPrice = this.totalPrice + ((element.fields.pvp_unitary - element.fields.pvp_unitary * element.fields.discount) * element.fields.amount);
      } else if (element.fields.amount >= 6) {
        this.totalPrice = this.totalPrice + (element.fields.pvp_wholesale * element.fields.amount);
      } else {
        this.totalPrice = this.totalPrice + (element.fields.pvp_unitary * element.fields.amount);
      }
    });
  }

  listProductChosen() {
    this._helperShopping.customProduct.subscribe(
      product => {
        if (product.id != undefined) {
          let sendProduct: any = this.listProductsShopping.find(element => element.id == product.id);
          if (sendProduct == undefined) {
            this.listProductsShopping.push(product);
          } else {
            let index = this.listProductsShopping.findIndex(element => element.id == product.id);
            if (product.fields.amount === 0) {
              this.listProductsShopping.splice(index, 1);
            } else {
              this.listProductsShopping[index].fields.amount = product.fields.amount;
            }
          }
          this.sendTotalCantProducts();
          this.totalPriceProducts();
        }
      });
  }

  changeProductAmount(product: any) {
    this._helperShopping.changeMessage(product);
    this.sendTotalCantProducts();
  }

  addAmount(index: number) {
    this.listProductsShopping[index].fields.amount++;
    this._helperShopping.changeMessage(this.listProductsShopping[index]);
    this.sendTotalCantProducts();
  }

  subtractAmount(index: number) {
    if (this.listProductsShopping[index].fields.amount > 0) {
      this.listProductsShopping[index].fields.amount--;
      this._helperShopping.changeMessage(this.listProductsShopping[index]);
      this.sendTotalCantProducts();
    }
  }

  deleteProduct(index: number) {
    this.listProductsShopping[index].fields.amount = 0;
    this._helperShopping.changeMessage(this.listProductsShopping[index]);
    this.listProductsShopping.splice(index, 1);
    this.sendTotalCantProducts();
  }
}
