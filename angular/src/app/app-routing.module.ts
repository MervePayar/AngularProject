import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path:'products', 
    component:ProductComponent
  }, //route ları tanımlıypruz
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {
    path:'products/category/:categoryId',
    component:ProductComponent
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:"product-add-1",
    component:ProductAddForms1Component, canActivate:[LoginGuard]
  },
  {
    path:"product-add-2",
    component:ProductAddForms2Component
  },
  {
    path:"login", component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
