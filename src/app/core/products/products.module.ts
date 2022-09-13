import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../shared/material.module';
import { ProductToWeekComponent } from './product-to-week/product-to-week.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { InformationSectionComponent } from '../components/information-section/information-section.component';
import { LoaderComponent } from './../components/loader/loader.component';
import { ExtraOptions } from '@angular/router';
import { PriceNumberFormat } from '../shared/pipes/priceNumberFormat.pipe';
import { ModalProductComponent } from './modal-product/modal-product.component';
import { HelperShoppingService } from '../shared/services/helperShopping.service';
import { SendProductsService } from '../shared/services/sendProducts.services';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [
    ListProductsComponent,
    ProductCardComponent,
    ProductToWeekComponent,
    ShoppingCartComponent,
    InformationSectionComponent,
    LoaderComponent,
    PriceNumberFormat,
    ModalProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ],
  providers:[
    HelperShoppingService,
    SendProductsService
  ]
})
export class ProductsModule { }
