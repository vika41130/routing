import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/component/error/error.component';
import { HomeComponent } from './core/component/home/home.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: ''
  },
  {
    pathMatch: 'full',
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: '**',
    component: ErrorComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
