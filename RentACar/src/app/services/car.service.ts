import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:7208/api/Cars/cardetaildtos"
  constructor(private httpclient:HttpClient) { }

  getCar():Observable<carResponseModel>{
   return this.httpclient.get<carResponseModel>(this.apiUrl)
  }
}
