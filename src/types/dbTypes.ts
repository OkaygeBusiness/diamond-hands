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
  amount: number
}

export type WatchList = Stock[]

export type TradeHistory = Trade[]

export interface WalletStock extends Stock {
  shares: number
}

export type Wallet = WalletStock[]

export interface User {
  id: number
  name: string
  image?: string
  currency: Currency
  wallet?: Wallet
  money: number
  highscore: number // for the quiz
  watchlist?: WatchList
  tradeHistory?: TradeHistory
}

export interface Answer {
  id: number
  answer: string
  isAnswer: boolean
}

export interface Question {
  id: number
  question: string
  answers: Answer[]
}

export interface Quiz {
  id: number
  name: string
  questions: Question[]
}
