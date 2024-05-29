import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";
import { Router } from "@angular/router";
import {Observable, of} from 'rxjs';
import { delay } from "rxjs/operators";
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {GetLotResponse} from '../models/get-lot-response';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  //Only for demo purpose
  authenticated = true;

  private apiUrl = environment.apiUrl;
  constructor(private store: LocalStoreService, private router: Router, private http: HttpClient) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem("rockville_creds");
  }

  getuser() {
    return of({});
  }

  signin(credentials): Observable<any> {
    console.log(credentials);
    this.authenticated = true;
    this.store.setItem("rockville_creds", true);
    return this.http.post(this.apiUrl + '/v1/api/login', credentials);
  }

  setCredentials(value: any) {
    this.store.setItem("rockville_creds", value.data);
  }

  getRoles() : any[] {
    return this.store.getItem("rockville_creds").user.authorities;
  }

  getAgentName() : string {
    return this.store.getItem("rockville_creds").firstName + " " + this.store.getItem("rockville_creds").middleName + " " + this.store.getItem("rockville_creds").lastName;
  }

  getInitials() : string {
    return this.store.getItem("rockville_creds").firstName[0] + this.store.getItem("rockville_creds").lastName[0];
  }

  getToken() : string {
    return this.store.getItem("rockville_creds").token;
  }

  public getLots(): Observable<GetLotResponse> {
    return this.http.get<GetLotResponse>(this.apiUrl + '/v1/api/lot');
  }
  signout() {
    this.authenticated = false;
    this.store.setItem("rockville_creds", false);
    this.router.navigateByUrl("/sessions/signin");
  }
}
