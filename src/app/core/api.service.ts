import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, mergeMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url).pipe(
      mergeMap((result: any) => {
        return of(result);
      }),
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }
}
