import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApicallService {

  constructor(private http:HttpClient) { }

  path="http://localhost:3000/users"

  getData(){
    return this.http.get(this.path);
  }
}
