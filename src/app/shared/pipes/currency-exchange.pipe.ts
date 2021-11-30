import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  transform(value: number, args: number[]): number {
    if (args && args.length > 1) {
      return (value / args[0] * args[1]);
    }
    return value;
  }
}
