import { Component, OnInit, Input } from '@angular/core';
import { ShippingService } from '../../shared/services/shipping.service';

interface SendProducts {
  address:string,
  municipality:string,
  city:string,
  barrio:string,
  weightTotal:number,
}
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

export class ShippingComponent implements OnInit {

  @Input() dataShipping: any = {}
  @Input() dataUser: any = {}

  constructor(private _shippingService: ShippingService) { }

  ngOnInit(): void {
    
  }

  loadInformationShipping(){
    // this._shippingService.getInformationShipping();
  }
}
