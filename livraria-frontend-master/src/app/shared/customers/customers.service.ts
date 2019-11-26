import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from "./customer";

import { Util } from '../util'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  insertCustomer(cust: string){
    return this.http.post(`${Util.API_URL}customers/`, cust, httpOptions);
  }

  getCustomer(){
    return this.http.get<Array<Customer>>(`${Util.API_URL}customers/`);
  }
}
