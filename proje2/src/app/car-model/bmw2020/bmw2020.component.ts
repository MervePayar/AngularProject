import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-bmw2020',
  templateUrl: './bmw2020.component.html',
  styleUrls: ['./bmw2020.component.css'],
  providers:[ApicallService]
})
export class Bmw2020Component implements OnInit {

  constructor(private apiCall:ApicallService) { }
  car_model:any;
  bmw2020:any;
  ngOnInit(): void {
    this.apiCall.getDataCarModel().subscribe(data => {

      this.car_model = data
      this.bmw2020 = this.car_model.filter((obj: any) => {
        return (obj.brand == 'BMW' && obj.year == '2020')
      })
    })
  }

}
