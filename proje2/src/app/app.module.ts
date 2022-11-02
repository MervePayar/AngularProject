import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LimitTextPipe } from './limit-text.pipe';
import { CarCategoryComponent } from './car-category/car-category.component'
import { CarModelComponent } from './car-model/car-model.component';
import { CommonModule } from '@angular/common';
import { Audi2020Component } from './car-model/audi2020/audi2020/audi2020.component';
import { Bmw2020Component } from './car-model/bmw2020/bmw2020.component';
import { Chevrolet2020Component } from './car-model/chevrolet2020/chevrolet2020.component';

@NgModule({
  declarations: [
    AppComponent,
    ApicallComponent,
    UserComponent,
    LimitTextPipe,
    CarModelComponent,
    CarCategoryComponent,
    Audi2020Component,
    Bmw2020Component,
    Chevrolet2020Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
