import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { map } from "rxjs/operators";
import * as pako from "pako";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  currencyURL: string = "https://api.exchangerate-api.com/v4/latest/INR";
  headers: any = new HttpHeaders({ "Content-Type": "application/json" });
 
 
      constructor(
      public http: HttpClient,
      public router: Router,
  
    ) {
      
  } 
   getJSON() {
    return this.http.get("assets/data.json");
                   

}
createProducts(product){
  return this.http.post("http://localhost:3000/products",product)
}
getList(){
  return this.http.get("http://localhost:3000/products")

}
updateProduct(product){
  debugger
  return this.http.put("http://localhost:3000/products" +'/'+ product.id, product)
}
deleteproduct(product){
  debugger
  return this.http.delete("http://localhost:3000/products"+'/'+ product)

}
}
