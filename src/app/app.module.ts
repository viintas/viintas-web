import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './core/products/products.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './core/components/banner/banner.component';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { HeaderComponent } from './core/components/header/header.component';
import { MaterialModule } from './core/shared/material.module';
import { FooterComponent } from './core/components/footer/footer.component';
import { ConfirmPurchaseModule } from './core/confirm-purchase/confirm-purchase.module';
// import { InformationSectionComponent } from './core/components/information-section/information-section.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    // InformationSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductsModule,
    ConfirmPurchaseModule,
    BrowserAnimationsModule,
    NgxSimpleCountdownModule,
    MaterialModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
