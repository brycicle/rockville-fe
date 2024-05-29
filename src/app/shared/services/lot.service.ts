import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {GetLotResponse} from '../models/get-lot-response';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  private apiUrl = environment.apiUrl;
  constructor(private router: Router, private http: HttpClient) { }

  public getLots(): Observable<GetLotResponse> {
    return this.http.get<GetLotResponse>(this.apiUrl + '/v1/api/lot');
  }
}
