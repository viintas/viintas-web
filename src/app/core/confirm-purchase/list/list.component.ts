import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
