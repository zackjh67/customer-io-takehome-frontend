import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {CustomerComponent} from './customer/customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'customer/:id', component: CustomerComponent },
  { path: 'customers', component: CustomerListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
