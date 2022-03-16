import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from './../shared/material.module';


@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
  ]
})
export class ProductsModule { }
