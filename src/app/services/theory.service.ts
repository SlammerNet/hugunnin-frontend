import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITheory } from '../interfaces/theory.interface'
import { IPagination } from '../interfaces/pagination.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TheoryService {

  constructor(private http: HttpClient) { }

  serviceUrl = "theory/"

  getVersions(pagination: IPagination) : Observable<ITheory[]>{
    return this.http.post<ITheory[]>(environment.baseUrl+this.serviceUrl+'all', pagination)
  }

  createTheory(body: any) : Observable<ITheory>{
      return this.http.post<ITheory>(environment.baseUrl+this.serviceUrl+'create', body)
  }

  delete(body: any) : Observable<ITheory>{
    return this.http.post<ITheory>(environment.baseUrl+this.serviceUrl+'delete', body)
  }

  getSpecificVersion(body: any) : Observable<ITheory[]>{
    return this.http.post<ITheory[]>(environment.baseUrl+this.serviceUrl+'specific', body)
  }

  getCountOfAllVersion() : Observable<number>{
    return this.http.get<number>(environment.baseUrl+this.serviceUrl+'count')
  }
}