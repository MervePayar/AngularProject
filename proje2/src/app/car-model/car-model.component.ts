import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ApicallComponent } from '../apicall/apicall.component';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.css'],
  providers: [ApicallService]
})
export class CarModelComponent implements OnInit {

  constructor(private apiCall: ApicallService) { }

  car_model:any;
  audi2020:any;
  mercedes2020:any;
  ngOnInit(): void {
    
    this.apiCall.getDataCarModel().subscribe(data => {
      this.car_model = data

      this.audi2020 = this.car_model.filter((obj:any) => {
        return (obj.brand=='Audi'&& obj.year=='2020')
      });
      this.mercedes2020=this.car_model.filter((obj:any)=>{
        return (obj.brand=='Mercedes' && obj.year=='2020')
      })

    })
  }
}
