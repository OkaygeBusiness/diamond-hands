import { User, TradeHistory } from "../../types/"
import { users } from "../../db"

export const getUsers = (): User[] => {
  return users
}

export const getUser = (id: number): User | undefined => {
  return users.find((user) => user.id === id)
}

export const addUser = (user: User): void => {
  users.push(user)
}

export const updateScore = (id: number, score: number): void => {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1) {
    users[index].highscore = score
  }
}

export const resetMoney = (id: number): void => {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1) {
    users[index].money = 10000
  }
}

export const updateUser = (user: User): User | undefined => {
  const index = users.findIndex((u) => u.id === user.id)
  if (index !== -1) {
    users[index] = user
    return user
  }
}

export const deleteUser = (id: number): void => {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1) {
    users.splice(index, 1)[0]
  }
}

export const getUserTradeHistory = (id: number): TradeHistory | undefined => {
  const user = getUser(id)
  return user ? user.tradeHistory : []
}
