import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { DevExtremeModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { EditCustomComponent } from './edit-custom/edit-custom.component';


@NgModule({
  declarations: [CustomersComponent, EditCustomComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DevExtremeModule,
    DxDataGridModule    
  ]
})
export class CustomersModule { }
