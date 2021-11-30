import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppReducerState} from './app.reducer';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: Store<any>) { }

  public getAllStates(): Observable<AppReducerState> {
    return this.store.select('userReducer');
  }
}
