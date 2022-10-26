import { Injectable } from '@angular/core';

declare let alertify:any; //javascrpitteki alertify objesini buluyor

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message:any){
    alertify.success(message);
  }
  warning(message:any){
    alertify.warning(message)
  }
}
// app module'de providers a eklersek, provideIn e gerek kalmaz