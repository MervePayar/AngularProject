import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-chevrolet2020',
  templateUrl: './chevrolet2020.component.html',
  styleUrls: ['./chevrolet2020.component.css'],
  providers:[ApicallService]
})
export class Chevrolet2020Component implements OnInit {

  constructor(private apiCall:ApicallService) { }
  car_model:any;
  chevrolet2020:any;
  ngOnInit(): void {
    this.apiCall.getDataCarModel().subscribe(data => {

      this.car_model = data
      this.chevrolet2020 = this.car_model.filter((obj: any) => {
        if (obj.brand == 'Chevrolet' && obj.year == '2020'){
          return (obj.brand == 'Chevrolet' && obj.year == '2020');
        }
        else{
          return (obj.brand=='Chevrolet' && obj.year>='2015')
        }
      })
    })
  }
}
