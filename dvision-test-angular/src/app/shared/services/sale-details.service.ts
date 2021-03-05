import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleDetailsService {

  constructor(private http: HttpClient) { }
  readonly APIUrl = environment.apiURL;


  getSaleDetails(){
    return this.http.get(`${this.APIUrl}/SaleDetails`);
  }

  removeSaleDetails(id:number){
    return this.http.delete(`${this.APIUrl}/SaleDetails/${id}`);
  }
}
