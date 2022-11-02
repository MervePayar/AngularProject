import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallComponent } from './apicall/apicall.component';
import { CarCategoryComponent } from './car-category/car-category.component';
import { Audi2020Component } from './car-model/audi2020/audi2020/audi2020.component';
import { Bmw2020Component } from './car-model/bmw2020/bmw2020.component';
import { CarModelComponent } from './car-model/car-model.component';
import { Chevrolet2020Component } from './car-model/chevrolet2020/chevrolet2020.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'apiCall',
    component: ApicallComponent
  },
  {
    path: "userlist",
    component: UserComponent
  },
  {
    path: "car-categories",
    component: CarCategoryComponent
  },
  {
    path: "car-categories/car-model/Audi",
    component: Audi2020Component
  },
  {
    path: "car-categories/car-model/Bmw",
    component: Bmw2020Component
  },
  {
    path: "car-categories/car-model/Chevrolet",
    component: Chevrolet2020Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
