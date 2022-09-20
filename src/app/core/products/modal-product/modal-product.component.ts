import { Component, OnInit, Input } from '@angular/core';
import { HelperShoppingService } from '../../shared/services/helperShopping.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {

  @Input() productShow: any;

  imageSelected: string = "";

  constructor(private _helperShopping: HelperShoppingService) { }

  ngOnInit(): void { 
    // console.log(this.productShow.fields.image[0]);
    
    this.imageSelected = this.productShow.fields.image[0].url;
  }

  changeImage(idImage:number){
    this.imageSelected = this.productShow.fields.image[idImage].url;
  }

  changeProductAmount() {
    this._helperShopping.changeMessage(this.productShow);
  }

  addAmount() {
    this.productShow.fields.amount++;
    this._helperShopping.changeMessage(this.productShow);
    
  }

  subtractAmount() {
    if (this.productShow.fields.amount > 0) {
      this.productShow.fields.amount--;
      this._helperShopping.changeMessage(this.productShow);
    }
  }

}
