import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './body/index/index.component';
import { AboutComponent } from './body/about/about.component';
import { ProductComponent } from './body/product/product.component';
import { CustomerComponent } from './body/customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './body/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    AboutComponent,
    ProductComponent,
    CustomerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
