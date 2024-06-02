import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:7208/api/Colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<colorResponseModel>{
    return this.httpClient.get<colorResponseModel>(this.apiUrl)
  }

}
