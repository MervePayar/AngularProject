import { Component, OnInit, Output, EventEmitter,Input, ViewChild } from '@angular/core';
import { __values } from 'tslib';
import { ApicallService } from '../../app/services/apicall.service';
import { CarCategoryComponent } from '../car-category/car-category.component';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css'],
  providers: [ApicallService]
})
export class CarModelComponent implements OnInit {

  constructor(private apiCall: ApicallService) { }

  @ViewChild(CarCategoryComponent) child:any;

  items:any;
  console:any;
  car_model:any;
  audi2020:any;
  mercedes2020:any;
  bmw2020:any;
  chevrolet2020:any;
  citroen2020:any;
  fiat2020:any;
  honda2020:any;
  ford2020:any;

  ngOnInit(): void {

    this.apiCall.getDataCarModel().subscribe(data => {

      this.car_model = data
      this.mercedes2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Mercedes' && obj.year=='2020')
      })
      this.chevrolet2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Chevrolet' && obj.year=='2020')
      })
      this.bmw2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='BMW' && obj.year=='2020')
      })
      this.citroen2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Citroen' && obj.year=='2020')
      })
      this.fiat2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Fiat' && obj.year=='2020')
      })
      this.honda2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Honda' && obj.year=='2020')
      })
      this.ford2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Ford' && obj.year=='2020')
      })
    })
  }
}
