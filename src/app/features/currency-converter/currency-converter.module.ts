import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { CurrencyConverterComponent } from './currency-converter.component';
import { CurrencyConverterSearchComponent } from './views/curreny-converter-search/currency-converter-search.component';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../../core/reducer/app.reducer';
import {SharedModule} from '../../shared/shared.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyConverterSearchComponent
  ],
  imports: [
    CommonModule,
    CurrencyConverterRoutingModule,
    RouterModule,
    StoreModule.forFeature('userReducer', reducer),
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CurrencyConverterModule { }
