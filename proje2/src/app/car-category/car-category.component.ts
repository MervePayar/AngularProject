import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.css'],
  providers:[ApicallService]
})
export class CarCategoryComponent implements OnInit {

  items:any;

  constructor(
    private apiCall:ApicallService,
    private router: Router,
    ) { }
    
  carListModel:any;
  carModelName:any;

  ngOnInit(): void {
    this.apiCall.getDataCar().subscribe(data=>{
      this.carListModel=data
      console.log(this.carListModel)
    })
  }

}
