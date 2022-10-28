import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[ApicallService]
})
export class UserComponent implements OnInit {

  constructor(private apiCall:ApicallService) { }
  
  userModel:any;

  ngOnInit(): void {
    this.apiCall.getDataUser().subscribe(data=>{
      this.userModel = data
      console.log(this.userModel)
    })
  }

}
