import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { CurrencyExchangePipe } from './pipes/currency-exchange.pipe';

const sharedDeclarations = [
  HeaderComponent,
  CurrencyExchangePipe
];

@NgModule({
  declarations: [sharedDeclarations],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [sharedDeclarations]
})
export class SharedModule { }
