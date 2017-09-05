import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './body/about/about.component';
import { ProductComponent } from './body/product/product.component';
import { CustomerComponent } from './body/customer/customer.component';
import { IndexComponent } from './body/index/index.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'customer', component: CustomerComponent},
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
