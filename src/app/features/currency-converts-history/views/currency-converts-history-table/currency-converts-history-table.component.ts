import { Component, OnInit } from '@angular/core';
import {ICurrencyConvert} from '../../../../models/currency-convert';

@Component({
  selector: 'app-currency-converts-history-table',
  templateUrl: './currency-converts-history-table.component.html',
  styleUrls: ['./currency-converts-history-table.component.scss']
})
export class CurrencyConvertsHistoryTableComponent implements OnInit {

  public currencyConverts: ICurrencyConvert[];

  constructor() { }

  ngOnInit(): void {
    this.currencyConverts = this.fetchCurrencyConvertsHistory();
  }


  private fetchCurrencyConvertsHistory(): ICurrencyConvert[] {
    const currencyConvertsHistory = localStorage.getItem('currencyConvertsHistory');
    if (currencyConvertsHistory) {
      return JSON.parse(currencyConvertsHistory);
    }
    return [];
  }

}
