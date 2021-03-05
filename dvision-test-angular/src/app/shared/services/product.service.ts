import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  readonly APIUrl = environment.apiURL;

  getProductList(){
    return this.http.get(this.APIUrl+'/Products');
  }

  getProductListById(id:number){
    return this.http.get(`${this.APIUrl}/Products/${id}`);
  }
  getCategories(){
    
    
    console.log(this.http.get(this.APIUrl+'/Categories'))
  }
  
  updateProduct(id:any){
    return this.http.put(this.APIUrl+'/Products',id);    
  }
    
  deleteProduct(id:any){    
    return this.http.delete(this.APIUrl+'/Products/'+id);    
  } 
}
