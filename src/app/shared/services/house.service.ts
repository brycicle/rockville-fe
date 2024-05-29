import { Injectable } from '@angular/core';
import {GetHouseResponse} from '../models/get-house-response';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private apiUrl = environment.apiUrl;
  constructor(private router: Router, private http: HttpClient) { }

  public getHouses(): Observable<GetHouseResponse> {
    return this.http.get<GetHouseResponse>(this.apiUrl + '/v1/api/house');
  }
}
