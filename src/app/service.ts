import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class CofeeService {
  
  constructor(private http: HttpClient) { }

  findProducts():Observable<any> {
    return this.http.get<HttpResponse<any>>(`https://test.dev.al/test/`)
  }
}