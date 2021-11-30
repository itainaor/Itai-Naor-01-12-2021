import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrencyConvertsHistoryComponent} from './currency-converts-history.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyConvertsHistoryComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConvertsHistoryRoutingModule { }
