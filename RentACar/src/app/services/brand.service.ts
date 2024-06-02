import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:7208/api/brands/getall";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<brandResponseModel> {
    return this.httpClient.get<brandResponseModel>(this.apiUrl);
  }
}
