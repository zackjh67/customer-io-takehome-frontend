import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { CustomerService } from '../../customer.service';
import { Customer } from '../../types/Customer';

@Component({
  selector: 'app-item',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  customer: Customer;
  routeSub: any;
  itemServiceSub: any;
  keys = Object.keys;

  constructor(titleService: Title,
              protected customerService: CustomerService,
              protected route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      if (params && params.id) {
        this.itemServiceSub = this.customerService.getCustomer(params.id).subscribe((c: Customer) => {
          if (c) {
            this.customer = c;
          }
        });
        titleService.setTitle(`Customer ${params.id}`);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub ? this.routeSub.unsubscribe() : undefined;
    this.itemServiceSub ? this.itemServiceSub.unsubscribe() : undefined;
  }

}
