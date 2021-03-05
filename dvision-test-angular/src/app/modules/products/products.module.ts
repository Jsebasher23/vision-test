import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DevExtremeModule,
    DxDataGridModule,
    FormsModule
  ]
})
export class ProductsModule { }
