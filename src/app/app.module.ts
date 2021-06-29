import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CustomerComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
