import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateUrlService {

  constructor(private router:Router) { }

  carModelName :any;
  getValue(value:any){
    this.router.navigateByUrl('car-model/'+value);
    this.carModelName=value;
    console.log(this.carModelName)
  }
}
