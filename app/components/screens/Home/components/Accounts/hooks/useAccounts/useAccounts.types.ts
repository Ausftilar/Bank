export type TypeCurrency = 'RUB' | 'USD'

export type TypeName = 'Tinkoff Black' | 'Tinkoff All'

export interface Account {
  _id: string,
  userId: string,
  balance: number,
  cardNumber: string,
  currency: TypeCurrency,
  name: TypeName,
}