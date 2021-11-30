import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../core/reducer/user.service';
import {ICurrency} from '../../../../models/currency';
import {ToastrService} from 'ngx-toastr';
import {Subscription, throwError} from 'rxjs';
import {AppReducerState} from '../../../../core/reducer/app.reducer';
import {catchError, map} from 'rxjs/operators';
import {CONSTANTS} from '../../../../../constants';
import {CurrencyExchangePipe} from '../../../../shared/pipes/currency-exchange.pipe';
import {ICurrencyConvert} from '../../../../models/currency-convert';
import * as actions from '../../../../core/reducer/app.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-currency-converter-search',
  templateUrl: './currency-converter-search.component.html',
  styleUrls: ['./currency-converter-search.component.scss']
})
export class CurrencyConverterSearchComponent implements OnInit, OnDestroy {

  public amountFormControl = new FormControl(null);
  public currencies: ICurrency[];
  public currencyConverterFormGroup: FormGroup;
  private stateSubscription: Subscription;
  private currencyExchangePipe = new CurrencyExchangePipe();
  private initialFromCurrency: ICurrency;
  private initialToCurrency: ICurrency;


  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private toastr: ToastrService,
              private store: Store<AppReducerState>) { }

  ngOnInit(): void {
    this.stateSubscription = this.userService.getAllStates().pipe(
      map((state: AppReducerState) => {
        this.currencies = state.currencies;
        this.initialFromCurrency = state.fromCurrency;
        this.initialToCurrency = state.toCurrency;
        this.initForm();
      }),
      catchError((error) => {
        this.toastr.error('Oops...something went wrong.', 'Error!');
        return throwError(error);
      })
    ).subscribe();
  }

  public switchFromTo(): void {
    this.currencyConverterFormGroup.patchValue({
      from: this.currencyConverterFormGroup.get('to').value,
      to: this.currencyConverterFormGroup.get('from').value
    });
  }

  private addHistory(): void {
    if (this.amountFormControl.value) {
      let currencyConvertsHistory: ICurrencyConvert[] = JSON.parse(localStorage.getItem('currencyConvertsHistory'));
      if (!currencyConvertsHistory) {
        currencyConvertsHistory = [];
      }
      currencyConvertsHistory.unshift({
        timestamp: Date.now(),
        from: {
          name: this.currencyConverterFormGroup.get('from').value?.name,
          amount: this.amountFormControl.value
        },
        to: {
          name: this.currencyConverterFormGroup.get('to').value?.name,
          amount: this.currencyExchangePipe.transform(this.amountFormControl.value, [
            this.currencyConverterFormGroup.get('from').value?.rate,
            this.currencyConverterFormGroup.get('to').value?.rate
          ])
        }
      });
      localStorage.setItem('currencyConvertsHistory', JSON.stringify(currencyConvertsHistory));
    }
  }

  private initForm(): void {

    this.currencyConverterFormGroup = this.formBuilder.group({
      from: [null],
      to: [null]
    });

    if (this.initialFromCurrency) {
      this.currencyConverterFormGroup.get('from').setValue(this.initialFromCurrency);
    } else {
      const fromFiltered = this.currencies.filter(currency => currency.name.toLowerCase() === CONSTANTS.CURRENCY_CONVERTER.DEFAULT_FROM);
      if (fromFiltered.length) {
        this.currencyConverterFormGroup.get('from').setValue(fromFiltered[0]);
      }
    }

    if (this.initialToCurrency) {
      this.currencyConverterFormGroup.get('to').setValue(this.initialToCurrency);
    } else {
      const toFiltered = this.currencies.filter(currency => currency.name.toLowerCase() === CONSTANTS.CURRENCY_CONVERTER.DEFAULT_TO);
      if (toFiltered.length) {
        this.currencyConverterFormGroup.get('to').setValue(toFiltered[0]);
      }
    }

    this.amountFormControl.valueChanges.subscribe((val) => {
      this.addHistory();
    });

    this.currencyConverterFormGroup.valueChanges.subscribe((val) => {
      this.addHistory();
    });

    this.currencyConverterFormGroup.get('from').valueChanges.subscribe((val: ICurrency) => {
      this.store.dispatch( {type: actions.ACTION_SET_FROM_CURRENCY, payload: val});
    });

    this.currencyConverterFormGroup.get('to').valueChanges.subscribe((val: ICurrency) => {
      this.store.dispatch( {type: actions.ACTION_SET_TO_CURRENCY, payload: val});
    });
  }

  ngOnDestroy(): void {
    this.stateSubscription.unsubscribe();
  }
}
