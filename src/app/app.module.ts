import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './core/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './core/components/banner/banner.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MaterialModule } from './core/shared/material.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { ConfirmPurchaseModule } from './core/confirm-purchase/confirm-purchase.module';
// import { InformationSectionComponent } from './core/components/information-section/information-section.component';
import { MatStepperModule } from '@angular/material/stepper';
import 'css-skeletons';
// import { LoaderComponent } from './core/components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    // LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsModule,
    ConfirmPurchaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductsModule,
    MatStepperModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
