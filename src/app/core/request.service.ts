import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private apiService: ApiService) { }

  public getExchangeRates(): Observable<any> {
    return this.apiService.get(`${environment.currencyConverterApiBaseUrl}/latest`);
  }
}
