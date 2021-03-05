import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren:() => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'products',
    loadChildren:() => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'sales',
    loadChildren:() => import('./modules/sales/sales.module').then(m => m.SalesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
