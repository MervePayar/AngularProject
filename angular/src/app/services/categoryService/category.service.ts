import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../../category/category';
import { catchError, Observable, throwError } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable() // burda tanımlanmadığı için, componentte providers olarak tanımlanıyor
export class CategoryService {
handleError(err:HttpErrorResponse){
  let errMessage=''
  if(err.error instanceof ErrorEvent){
    errMessage = 'bir hata oluştu' + err.error.message
  }
  else{
    errMessage = 'sistemsel bir hata'
  }
  return throwError(()=>errMessage)
}
constructor(private http: HttpClient) { }
path = "http://localhost:3000/categories"


getCategories():Observable<Category[]>{ //
  return this.http
    .get<Category[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))), //loglama
      catchError(this.handleError) //hata yakalama
    );
}
}
