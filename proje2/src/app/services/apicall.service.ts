import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApicallService {

  constructor(private http:HttpClient) { }

  pathUser="http://localhost:3000/users"
  pathCar="http://localhost:3000/CarCategories"
  pathCarModel="http://localhost:3000/CarModels"
  pathCarImage="http://localhost:3000/carModelImage"
  getDataUser(){
    return this.http.get(this.pathUser);
  }
  getDataCar(){
    return this.http.get(this.pathCar);
  }
  getDataCarModel(){
    return this.http.get(this.pathCarModel)
  }
  getDataCarModelImage(){
    return this.http.get(this.pathCarImage)
  }
}
