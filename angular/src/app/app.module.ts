import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component'
import { NgModel } from '@angular/forms';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component'
import { AccountService } from './services/accountService/account.service';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe,
    HomeComponent,
    ProductAddForms1Component,
    ProductAddForms2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [AccountService, LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
