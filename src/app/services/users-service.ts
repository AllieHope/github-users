import { UserOverview } from './../models/user-overview';
import { UserSummary } from './../models/user-summary';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class UsersService {
  apiBaseUrl: string = "https://api.github.com";

  constructor(private http: Http) {
  }

  getUsers(): Observable<UserSummary[]> {
    return this.http.get(`${this.apiBaseUrl}/users`)
      .map((res: any) => res.json());
  }

  getUser(username: string): Observable<UserOverview> {
    return this.http.get(`${this.apiBaseUrl}/users/${username}`)
      .map((res: any) => res.json());
  }
}