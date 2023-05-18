export type TypeCurrency = 'RUB' | 'USD';

export type TypeName = 'Tinkoff Black' | 'Tinkoff All';

export type TypePaymentSystem = 'Mastercard' | 'Visa';

export interface Account {
  _id: string,
  userId: string,
  balance: number,
  cardNumber: string,
  cardPaymentSystem: TypePaymentSystem,
  currency: TypeCurrency,
  name: TypeName,
}