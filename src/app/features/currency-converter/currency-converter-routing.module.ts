import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyConverterComponent} from './currency-converter.component';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConverterComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class CurrencyConverterRoutingModule { }
