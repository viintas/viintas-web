import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductToWeekComponent } from './product-to-week/product-to-week.component';

const routes: Routes = [
    {   path: 'list',   component: ListProductsComponent, pathMatch:'full'},
    {   path: 'selected',   component: ProductToWeekComponent, pathMatch:'full'},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
