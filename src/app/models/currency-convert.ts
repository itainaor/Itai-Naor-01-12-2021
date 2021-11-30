export interface ICurrencyConvert {
  timestamp: number;
  from: ICurrencyAmount;
  to: ICurrencyAmount;
}

export interface ICurrencyAmount {
  name: string;
  amount: number;
}
