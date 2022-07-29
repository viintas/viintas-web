import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';

interface ProductShopping {
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

  @Input() listProducts: Product[] = [];
  lol: number = 1;
  listProductsShopping: ProductShopping[] = [];
  message: any = {};
  pruebaProduct: any | undefined;

  constructor(private _helperShopping: HelperShoppingService) { }

  ngOnInit(): void {
    this._helperShopping.customMessage.subscribe(
      product => {

        let newProduct = {
          name: product.fields.name,
          pvp_unitary: product.fields.pvp_unitary,
          image: product.fields.image[0].url,
          amount: product.amount
        }

        let pruebaProduct: any = this.listProductsShopping.find(element => element.name == product.fields.name);

        if (pruebaProduct == undefined) {
          this.listProductsShopping.push(newProduct);
        } else {
          if (pruebaProduct.name == product.fields.name) {
            let index = this.listProductsShopping.findIndex(element => element.name == product.fields.name);
            this.listProductsShopping[index].amount += 1;
          }
        }
      });
  }

  arrayRandom(num: number) {
    return new Array(num);
  }
}
