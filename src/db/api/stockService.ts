import { Stock } from "../../types"
import { stocks } from "../../db/stocks"

export const getStocks = (): Stock[] => {
  return stocks
}

export const getStock = (id: number): Stock | undefined => {
  return stocks.find((stock) => stock.id === id)
}

export const addStock = (stock: Stock): Stock => {
  stocks.push(stock)
  return stock
}

export const updateStock = (stock: Stock): Stock | undefined => {
  const index = stocks.findIndex((s) => s.id === stock.id)
  if (index !== -1) {
    stocks[index] = stock
    return stock
  }
}

export const deleteStock = (id: number): Stock | undefined => {
  const index = stocks.findIndex((s) => s.id === id)
  if (index !== -1) {
    return stocks.splice(index, 1)[0]
  }
}
