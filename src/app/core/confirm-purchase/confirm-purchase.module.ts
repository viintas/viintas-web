import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPurchaseRoutingModule } from './confirm-purchase-rounting.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../shared/material.module';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    FormComponent,
    StepperComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ConfirmPurchaseRoutingModule,
    MaterialModule
  ]
})
export class ConfirmPurchaseModule { }
