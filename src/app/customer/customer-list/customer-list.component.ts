import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-item',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: any;
  routeSub: any;
  itemServiceSub: any;

  constructor(titleService: Title,
              protected customerService: CustomerService) {
    this.itemServiceSub = this.customerService.getCustomers().subscribe((c) => {
      if (c) {
        this.customers = c;
      }
    });
    titleService.setTitle('Customers');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.routeSub ? this.routeSub.unsubscribe() : undefined;
    this.itemServiceSub ? this.itemServiceSub.unsubscribe() : undefined;
  }

}
