import { Component } from '@angular/core';
import {AppService} from './core/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {
  }

  public get pageTitle(): string {
    return this.appService.pageTitle;
  }
}
