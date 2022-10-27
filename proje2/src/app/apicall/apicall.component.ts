import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css'],
  providers:[ApicallService]

})
export class ApicallComponent implements OnInit {
  data:any;
  constructor(private apiService: ApicallService) { }
  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response
      console.log(this.data)
      console.log("merve")
    })
  }
}
