import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './component/product.detail/product.detail.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent
	},
	{
		path: 'detail/:id/test/:id2',
		component: ProductDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductRoutingModule { }
