import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { SaleDetails } from './sale-details.model';
import { Sale } from './sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  formData:Sale;
  saleDetail:SaleDetails[];
  constructor(private http : HttpClient) { }
  readonly APIUrl = environment.apiURL;

  
  saveSale(){
    var body = {
      ...this.formData,
      SaleDetails:this.saleDetail     
    }
    return this.http.post(`${this.APIUrl}/Sales`,body);
  }

  

  
}
