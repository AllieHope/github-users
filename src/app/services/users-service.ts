import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export interface User {
    name: string
  }
  
  @Injectable()
  export class UsersService {
    apiBaseUrl: string = "https://api.github.com";

    constructor(private http: Http) {
    }
  
    getUsers(): Observable<string[]> {
      return this.http.get(`${this.apiBaseUrl}/users`)
        .map((res: any) => res.json());
    }
  
  }