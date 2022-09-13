import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { SendProductsService } from '../../shared/services/sendProducts.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() dataListProducts = new EventEmitter<any>();

  listProducts:any = [];
  totalPrice:number = 0;

  constructor(private _sendProductsServices: SendProductsService) { }

  ngOnInit(): void {
    this.loadListProducts();
    this.totalPriceProducts();
    //Cuando se valide el formulario se ejecuta la siguiente funcion
    this.confirmInformation()
  }

  confirmInformation(){
    this.dataListProducts.emit(this.listProducts)
  }
  loadListProducts(){
    this._sendProductsServices.customProduct.subscribe(
      list => {
        this.listProducts = list;
      }
    )
  }

  totalPriceProducts() {
    this.totalPrice = 0;
    this.listProducts.forEach((element:any) => {
      if (element.fields.amount >= 6) {
        this.totalPrice = this.totalPrice + (element.fields.pvp_wholesale * element.fields.amount);
      } else {
        this.totalPrice = this.totalPrice + (element.fields.pvp_unitary * element.fields.amount);
      }
    });
  }

  newArray(cant:number){
    return new Array(cant);
  }

  alertDelete(){
    Swal.fire({
      title: '¿Estas seguro que quieres eliminar el producto de la lista?',
      text: "Podrás volverlo a agregar en el catalogo",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Has eliminado el produto de la lista',
          'success'
        )
      }
    })
  }
}
