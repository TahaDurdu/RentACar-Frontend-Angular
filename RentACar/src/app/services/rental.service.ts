import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:7208/api/Rentals/rentalalldto"

  constructor(private httpclient:HttpClient) { }

  getRental():Observable<rentalResponseModel>{
   return this.httpclient.get<rentalResponseModel>(this.apiUrl)
  }
}
