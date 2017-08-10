import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from '../app/body/index/index.component';
import { AboutComponent } from '../app/body/about/about.component';
import { ProductComponent } from '../app/body/product/product.component';
import { CustomerComponent } from '../app/body/customer/customer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AboutComponent,
    ProductComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
