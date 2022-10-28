import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { LimitTextPipe } from './limit-text.pipe';
import { CarCategoryComponent } from './car-category/car-category.component';
import { CarModelComponent } from './car-model/car-model.component';

@NgModule({
  declarations: [
    AppComponent,
    ApicallComponent,
    UserComponent,
    LimitTextPipe,
    CarCategoryComponent,
    CarModelComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
