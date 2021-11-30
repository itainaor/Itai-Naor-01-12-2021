import { Component, OnInit } from '@angular/core';
import {AppService} from '../../core/app.service';

@Component({
  selector: 'app-currency-converts-history',
  templateUrl: './currency-converts-history.component.html',
  styleUrls: ['./currency-converts-history.component.scss']
})
export class CurrencyConvertsHistoryComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.pageTitle = 'Currency converts history';
    }, 0);
  }
}
