import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../../product/product';
import { catchError, Observable, throwError } from 'rxjs';
import {tap} from 'rxjs/operators';
import { ParamMap } from '@angular/router';

@Injectable()
export class ProductService {
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
path = "http://localhost:3000/products"


getProducts(categoryId:any):Observable<Product[]>{ //
  
  let newPath=this.path
  if(categoryId){
    newPath+= "?categoryId="+categoryId
  }
  return this.http
    .get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))), //loglama
      catchError(this.handleError) //hata yakalama
    );
}

addProduct(product:Product):Observable<Product>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })

  }
  return this.http.post<Product>(this.path,product,httpOptions).pipe(
    tap(data=>console.log(JSON.stringify(data))), //loglama
    catchError(this.handleError)
    ) //hata yakalama
}

}
