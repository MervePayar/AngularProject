import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-audi2020',
  templateUrl: './audi2020.component.html',
  styleUrls: ['./audi2020.component.css'],
  providers:[ApicallService]
})
export class Audi2020Component implements OnInit {

  constructor(private apiCall: ApicallService) { }

  car_model: any;
  audi2020: any;
  carImage:any;
  ngOnInit(): void {
    this.apiCall.getDataCarModel().subscribe(data => {

      this.car_model = data

      this.audi2020 = this.car_model.filter((obj: any) => {
        return (obj.brand == 'Audi' && obj.year == '2020')
      });
    }
    )

    this.apiCall.getDataCarModelImage().subscribe(model=>{
      this.carImage= model
    })

  }
}
