import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';
import { NaviComponent } from './component/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './component/car/car.component';
import { RentalComponent } from './component/rental/rental.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    CarComponent,
    RentalComponent
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
