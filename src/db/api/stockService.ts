import { Stock } from "../../types"
import { stocks } from "../../db/stocks"
import * as UserService from "./userService"
import { calculateBrokerFee, calculateTotal } from "../../utils"

export const getStocks = (): Stock[] => {
  return stocks
}

export const getStock = (id: number): Stock | undefined => {
  return stocks.find((stock) => stock.id === id)
}

export const buyStock = (userId: number, stockId: number, amount: number): void => {
  const user = UserService.getUser(userId)
  if (user) {
    const stock = getStock(stockId)
    if (stock) {
      const total = calculateTotal(stock.price, amount)
      if (user.money >= total) {
        user.money -= total
        if (user.tradeHistory) {
          user.tradeHistory.push({
            stock,
            price: stock.price,
            date: new Date().toISOString().split("T")[0],
            brokerFee: calculateBrokerFee(total),
            ammount: amount
          })
        }
      }
    }
  }
}

export const addWatchlistStock = (userId: number, stockId: number): void => {
  const user = UserService.getUser(userId)
  if (user) {
    const stock = getStock(stockId)
    if (stock) {
      if (user.watchlist) {
        user.watchlist.push(stock)
      } else {
        user.watchlist = [stock]
      }
    }
  }
}
