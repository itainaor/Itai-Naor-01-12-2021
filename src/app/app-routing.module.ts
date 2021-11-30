import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CONSTANTS} from '../constants';

const routes: Routes = [
  {
    path: CONSTANTS.ROUTES.CURRENCY_CONVERTER.BASE,
    pathMatch: 'full',
    loadChildren:  () => import('./features/currency-converter/currency-converter.module').then(m => m.CurrencyConverterModule)
  },
  {
    path: CONSTANTS.ROUTES.CURRENCY_CONVERTS_HISTORY.BASE,
    loadChildren:  () => import('./features/currency-converts-history/currency-converts-history.module').then(m => m.CurrencyConvertsHistoryModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
