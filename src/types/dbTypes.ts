export enum Currency {
  USD = "USD",
  EUR = "EUR",
  CAD = "CAD",
  GBP = "GBP",
  AUD = "AUD",
  JPY = "JPY"
}

export interface Stock {
  id: number
  name: string
  shortName: string
  price: number
  logo: string
}

export interface User {
  id: number
  name: string
  currency: Currency
  wallet: number
  highscore: number
}
