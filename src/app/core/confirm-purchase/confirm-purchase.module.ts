import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPurchaseRoutingModule } from './confirm-purchase-rounting.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../shared/material.module';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { SendProductsService } from '../shared/services/sendProducts.services';
import { ShippingComponent } from './shipping/shipping.component';
// import { PriceNumberFormat } from '../shared/pipes/priceNumberFormat.pipe';

@NgModule({
  declarations: [
    FormComponent,
    StepperComponent,
    ListComponent,
    ShippingComponent,
    // PriceNumberFormat
  ],
  imports: [
    CommonModule,
    ConfirmPurchaseRoutingModule,
    MaterialModule
  ],
  providers:[
    SendProductsService
  ]
})
export class ConfirmPurchaseModule { }
