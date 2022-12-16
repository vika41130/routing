import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product.detail/product.detail.component';
import { ActivatedRouteSnapshot, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  providers: [
    // ActivatedRouteSnapshot
  ]
})
export class ProductModule { }
