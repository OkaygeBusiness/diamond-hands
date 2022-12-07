// TODO: Implement this method
import { Wallet } from "../types"

export const formatCurrency = (value: number) => {
  return console.log("Method not implemented.")
}

export const calculateBrokerFee = (value: number) => {
  return parseInt((value * 0.02).toFixed(2)) // 2% broker fee
}

export const calculateTotal = (value: number, amount: number) => {
  return parseInt((value * amount + calculateBrokerFee(value * amount)).toFixed(2))
}

export const calculateWalletValue = (wallet: Wallet) => {
  if (wallet.length === 0) {
    return 0
  }
  return wallet.reduce((acc, stock) => {
    return acc + stock.price * stock.shares
  }, 0)
}
