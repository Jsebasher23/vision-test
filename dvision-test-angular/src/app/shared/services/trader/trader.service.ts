import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraderService {

  constructor(private http : HttpClient) { }
  readonly APIUrl = environment.apiURL;
  

  getTraderList(){
    return this.http.get(this.APIUrl+'/Traders');
  }
}
