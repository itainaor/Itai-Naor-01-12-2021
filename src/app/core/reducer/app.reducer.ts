import * as actions from './app.actions';
import {ICurrency} from '../../models/currency';

export interface AppReducerState {
  readonly currencies: ICurrency[];
  readonly fromCurrency: ICurrency;
  readonly toCurrency: ICurrency;

}

const initialState: AppReducerState = {
  currencies: [],
  fromCurrency: null,
  toCurrency: null
};

export function reducer(state = initialState, action): AppReducerState {
  switch (action.type) {
    case actions.ACTION_INIT_CURRENCIES:
      return {
        ...state,
        currencies: action.payload
      };
    case actions.ACTION_SET_FROM_CURRENCY:
      return {
        ...state,
        fromCurrency: action.payload
      };
    case actions.ACTION_SET_TO_CURRENCY:
      return {
        ...state,
        toCurrency: action.payload
      };
    default:
      return {
        ...state,
      };
  }
}
