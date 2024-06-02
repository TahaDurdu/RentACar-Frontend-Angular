import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:7208/api/Customers/getall"
  constructor(private httpclient:HttpClient) { }

  getCustomer():Observable<customerResponseModel>{
    return this.httpclient.get<customerResponseModel>(this.apiUrl)
  }

}
