import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }
  readonly APIUrl = environment.apiURL;
  

  getCustomerList(){
    return this.http.get(this.APIUrl+'/Customers');
  }

  saveCustomer(data:Customer){  
    return this.http.post(this.APIUrl+'/Customers',data);    
  }  
  updateCustomer(id:any,data:Customer){    
    return this.http.put(this.APIUrl+'/Customers/'+id,data);    
  } 
  deleteCustomer(id:any){    
    return this.http.delete(this.APIUrl+'/Customers/'+id);    
  } 
}
