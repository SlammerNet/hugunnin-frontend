import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProductions } from '../interfaces/productions.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductionService {

  constructor(private http: HttpClient) { }

  serviceUrl = "production/"

  getProductions() : Observable<IProductions[]>{
    return this.http.get<IProductions[]>(environment.baseUrl+this.serviceUrl+'all')
  }
}