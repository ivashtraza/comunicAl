import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class CofeeService {
  productListInfo:any
  private _productSubject$ = new BehaviorSubject([{}])
  
  constructor(private http: HttpClient) { }

  findProducts():Observable<any> {
    return this.http.get<HttpResponse<any>>(`https://test.dev.al/test/`)
  }
  setProductList
  (productListInfo:any) {
    this.productListInfo = productListInfo
    this._productSubject$.next(productListInfo)
  }

  getproductList() {
    return this.productListInfo
  }
  

}