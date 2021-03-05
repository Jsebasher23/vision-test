import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import { SaleDetailsComponent } from './sale-details/sale-details.component';


@NgModule({
  declarations: [SalesComponent,SaleDetailsComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,    
    MatDialogModule
  ]
})
export class SalesModule { }
