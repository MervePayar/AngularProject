import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  user:any[]=[
    {id:1, name:'merve',email:'mpayar95@gmail.com', password:"1234"},
    {id:2, name:'engin',email:'engin@gmail.com', password:"12345"},
    {id:3, name:'aydın',email:'aydin@gmail.com', password:"1234"},
    {id:4, name:"emine", email:'emis@gmail.com',password:'3456'},
    {id:5, name:'gulsah',email:'gulsah@gmail.com', password:"9876"},
    {id:6, name:'sercan',email:'sercan@gmail.com', password:"6789"}
  ]
  ngOnInit(): void {
    this.userControl()
  }
  userControl(){
    console.log(this.user)
  }
}
