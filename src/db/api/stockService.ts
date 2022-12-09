import { Stock } from "../../types"
import { stocks } from "../../db"
import * as UserService from "./userService"
import { calculateBrokerFee, calculateTotal } from "../../utils"

export const getStocks = (): Stock[] => {
  return stocks
}

export const getStock = (id: number): Stock | undefined => {
  return stocks.find((stock) => stock.id === id)
}

export const buyStock = (userId: number, stockId: number, shares: number): void => {
  const user = UserService.getUser(userId)
  if (user) {
    const stock = getStock(stockId)
    if (stock) {
      const total = calculateTotal(stock.price, shares)
      const brokerFee = calculateBrokerFee(total)
      const totalWithFee = total + brokerFee
      if (user.money >= totalWithFee) {
        user.money -= totalWithFee
        if (user.wallet) {
          const stockInWallet = user.wallet.find((walletStock) => walletStock.id === stockId)
          if (stockInWallet) {
            stockInWallet.shares += shares
          } else {
            user.wallet.push({ ...stock, shares })
          }
        } else {
          user.wallet = [{ ...stock, shares }]
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

export const removeWatchlistStock = (userId: number, stockId: number): void => {
  const user = UserService.getUser(userId)
  if (user) {
    if (user.watchlist) {
      user.watchlist = user.watchlist.filter((stock) => stock.id !== stockId)
    }
  }
}
