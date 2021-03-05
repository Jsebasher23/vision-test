import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomersModule } from './modules/customers/customers.module';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsModule } from './modules/products/products.module';
import { SalesModule } from './modules/sales/sales.module';
import { CustomerService } from './shared/services/customer.service';
import { ProductService } from './shared/services/product.service';
import { SaleService } from './shared/services/sale.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    CustomersModule,
    ProductsModule,
    SalesModule,
    HttpClientModule,  
    BrowserAnimationsModule        
  ],
  providers: [
    CustomerService,
    ProductService,
    SaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
