import Currency from './3-currency';

export default class Pricing {
  constructor (amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount () {
    return this._amount;
  }

  set amount (newAmount) {
    this._amount = newAmount;
  }

  get currency () {
    return this._currency;
  }

  set currency (newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice () {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  ConvertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
