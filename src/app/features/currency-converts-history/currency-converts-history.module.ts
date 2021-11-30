import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConvertsHistoryRoutingModule } from './currency-converts-history-routing.module';
import { CurrencyConvertsHistoryComponent } from './currency-converts-history.component';
import { CurrencyConvertsHistoryTableComponent } from './views/currency-converts-history-table/currency-converts-history-table.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CurrencyConvertsHistoryComponent, CurrencyConvertsHistoryTableComponent],
  imports: [
    CommonModule,
    CurrencyConvertsHistoryRoutingModule,
    SharedModule
  ]
})
export class CurrencyConvertsHistoryModule { }
