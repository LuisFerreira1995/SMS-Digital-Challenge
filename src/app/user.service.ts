import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataJson = "./assets/data.json"

  constructor( private http: HttpClient) {} 
  
  getUser():Observable<User[]> { 
    return this.http.get<User[]>(this.dataJson);

  }

}

