import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';
import { SendProductsService } from '../../shared/services/sendProducts.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() dataListProducts = new EventEmitter<any>();

  listProducts: any = [];
  totalPrice: number = 0;

  constructor(
    private _sendProductsServices: SendProductsService,
    private _helperShopping: HelperShoppingService) { }

  ngOnInit(): void {
    this.loadListProducts();
    this.totalPriceProducts();
    //Cuando se valide el formulario se ejecuta la siguiente funcion
    this.confirmInformation()
  }

  changeProductAmount(idProduct: number) {
    this._helperShopping.changeMessage(this.listProducts[idProduct]);
  }

  addAmount(idProduct: number) {
    this.listProducts[idProduct].fields.amount++;
    this._helperShopping.changeMessage(this.listProducts[idProduct]);
  }

  subtractAmount(idProduct: number) {
    if (this.listProducts[idProduct].fields.amount > 0) {
      this.listProducts[idProduct].fields.amount--;
      this._helperShopping.changeMessage(this.listProducts[idProduct]);
    }
  }

  confirmInformation() {
    this.dataListProducts.emit(this.listProducts)
  }
  loadListProducts() {
    this._sendProductsServices.customProduct.subscribe(
      list => {
        this.listProducts = list;
      }
    )
  }

  totalPriceProducts() {
    this.totalPrice = 0;
    this.listProducts.forEach((element: any) => {
      if (element.fields.amount >= 6) {
        this.totalPrice = this.totalPrice + (element.fields.pvp_wholesale * element.fields.amount);
      } else {
        this.totalPrice = this.totalPrice + (element.fields.pvp_unitary * element.fields.amount);
      }
    });
  }

  newArray(cant: number) {
    return new Array(cant);
  }

  alertDelete(idProduct:number) {
    this.listProducts.splice(idProduct,1)
  }
}
