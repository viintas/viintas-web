import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';

import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
    {   path: 'list',   component: ListProductsComponent   },
    {   path: 'create',   component: CreateProductComponent   },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
