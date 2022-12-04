import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductionsType } from '../interfaces/production-type.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductionTypeService {

  constructor(private http: HttpClient) { }

  serviceUrl = "production-type/"

  getProductionsType() : Observable<IProductionsType[]>{
    return this.http.get<IProductionsType[]>(environment.baseUrl+this.serviceUrl+'all')
  }
}