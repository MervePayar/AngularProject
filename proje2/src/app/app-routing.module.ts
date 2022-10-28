import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallComponent } from './apicall/apicall.component';
import { CarCategoryComponent } from './car-category/car-category.component';
import { CarModelComponent } from './car-model/car-model.component';
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
  { path:"car-model/:category",
    component:CarModelComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
