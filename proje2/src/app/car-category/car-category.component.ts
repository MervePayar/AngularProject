import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';
@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.css'],
  providers:[ApicallService]
})
export class CarCategoryComponent implements OnInit {

  constructor(private apiCall:ApicallService) { }

  carListModel:any;
  
  ngOnInit(): void {
    this.apiCall.getDataCar().subscribe(data=>{
      this.carListModel=data
      console.log(this.carListModel)
    })
    
  }
}
