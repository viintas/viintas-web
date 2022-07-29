import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../shared/material.module';
import { ProductToWeekComponent } from './product-to-week/product-to-week.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { InformationSectionComponent } from '../components/information-section/information-section.component';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [
    ListProductsComponent,
    CreateProductComponent,
    ProductCardComponent,
    ProductToWeekComponent,
    ShoppingCartComponent,
    InformationSectionComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    NgxSimpleCountdownModule
  ]
})
export class ProductsModule { }
