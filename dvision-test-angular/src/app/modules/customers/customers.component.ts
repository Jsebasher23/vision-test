import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/services/customer.model';
import { CustomerService } from 'src/app/shared/services/customer.service';

import notify  from 'devextreme/ui/notify';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

    
  customers : Customer[]=[]; 
  dataGrid : Customer;
  key : any;
    constructor( private service: CustomerService ) {    
      this.service.getCustomerList().subscribe((cres : any) => {
        this.customers = cres;       
      });            
    }

    

    
  onSaving(e: any) {   
    this.key = e.changes[0].key;
    this.dataGrid = e.changes[0].data;
    if(this.key > 0){
      this.updateCustomers(this.key,this.dataGrid);
    }else{
      this.addCustomers(this.dataGrid);      
    }   
   return true;
  }

  editCustomer(id:number){
    
  }
  addCustomers(data:Customer) {       
    this.service.saveCustomer(data).subscribe((res:any) => {     
      notify({
          message: "Nuevo cliente "+res.CustomerName+" ha sido guardado exitosamente. ",
          width: 450
      }, 
      "success",
      2000); 
    });
  }
  updateCustomers(id : number,data : Customer) {        
    data.CustomerID = id;
    this.service.updateCustomer(id,data).subscribe((res:any) => {
      notify({
        message: "El cliente "+res.CustomerName+" ha sido actualizado exitosamente. ",
        width: 450
    }, 
    "success",
    2000); 
    })
    
   }
  deleteCustomers(e) {
   e.row.data.CustomerID
  }
  

  messageNotification(){

  }


 

}
