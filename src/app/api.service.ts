import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  customerUrl = 'http://localhost:1323/customers';

  constructor(private http: HttpClient) { }

  listCustomers(): Observable<any> {
    return this.http.get(this.customerUrl);
  }

  getCustomer(id): Observable<any> {
    return this.http.get(`${this.customerUrl}/${id}`);
  }
}
