import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _pageTitle: string = '';

  constructor() { }


  get pageTitle(): string {
    return this._pageTitle;
  }

  set pageTitle(value: string) {
    this._pageTitle = value;
  }
}
