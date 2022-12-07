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

export interface Trade {
  stock: Stock
  price: number
  date: string
  brokerFee: number
  ammount: number
}

export type WatchList = Stock[]

export interface User {
  id: number
  name: string
  image?: string
  currency: Currency
  wallet: number
  highscore: number
  watchlist?: WatchList
  tradeHistory?: Trade[]
}
