import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: BehaviorSubject<any[]>;
  selectedCustomer: BehaviorSubject<any[]>;

  constructor(public api: ApiService) {
  }

  getCustomers(): Observable<any> {
    this.customers = new BehaviorSubject<any[]>(undefined);
    this.api.listCustomers().pipe(
      map(c => c.customers.map(o => ({...o, ...o.attributes, ...{ attributes: undefined } })))
    ).subscribe( async (items: Promise<any[]>) => {
      this.customers.next(await items);
    });
    return this.customers;
  }

  getCustomer(id: any): Observable<any> {
    this.selectedCustomer = new BehaviorSubject<any[]>(undefined);
    this.api.getCustomer(id).pipe(
      // merge properties in attributes object onto customer for easyness
      map(c => ( {...c, ...c.attributes, ...{ attributes: undefined } } )),
    ).subscribe( async (c: Promise<any[]>) => {
      this.selectedCustomer.next(await c);
    });
    return this.selectedCustomer;
  }
}
