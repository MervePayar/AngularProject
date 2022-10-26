import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/accountService/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  model:User=new User()


  ngOnInit(): void {
  }


  login(form:NgForm){
    //kullanıcı adı şifre yönetimi için account service çağrılır
    this.accountService.login(this.model)
  
  }
}
