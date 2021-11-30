import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../core/request.service';
import {catchError, map} from 'rxjs/operators';
import {ICurrency} from '../../models/currency';
import {Store} from '@ngrx/store';
import {AppReducerState} from '../../core/reducer/app.reducer';
import * as actions from '../../core/reducer/app.actions';
import {ToastrService} from 'ngx-toastr';
import {AppService} from '../../core/app.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  constructor(private requestService: RequestService,
              private store: Store<AppReducerState>,
              private toastr: ToastrService,
              private appService: AppService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.appService.pageTitle = 'Currency converter';
    }, 0);
    this.fetchExchangeRates();
  }

  private fetchExchangeRates(): void {
    this.requestService.getExchangeRates().pipe(
      map((result: any) => {
        const currencies: ICurrency[] = Object.keys(result?.rates).map((key) => {
          return {
            name: key,
            rate: result?.rates[key]
          };
        });
        if (result?.base && result?.amount) {
          currencies.unshift({
            name: result?.base,
            rate: result?.amount,
            isBase: true
          });
        }
        this.store.dispatch( {type: actions.ACTION_INIT_CURRENCIES, payload: currencies});
      }),
      catchError((error: any) => {
        this.toastr.error('Failed to fetch currencies.', 'Error!');
        throw throwError(error);
      })
    ).subscribe();
  }

}
