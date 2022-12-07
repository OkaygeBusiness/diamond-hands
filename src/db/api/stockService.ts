import { Stock } from "../../types"
import { stocks } from "../../db/stocks"
import * as UserService from "./userService"

export const getStocks = (): Stock[] => {
  return stocks
}

export const getStock = (id: number): Stock | undefined => {
  return stocks.find((stock) => stock.id === id)
}

export const addWatchlistStock = (userId: number, stockId: number): Stock | undefined => {
  const user = UserService.getUser(userId)
  if (user) {
    const stock = getStock(stockId)
    if (stock) {
      if (user.watchlist) {
        user.watchlist.push(stock)
      } else {
        user.watchlist = [stock]
      }
      return stock
    }
  }
}
