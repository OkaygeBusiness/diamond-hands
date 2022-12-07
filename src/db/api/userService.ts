import { User } from "../../types/"
import { users } from "../../db/users"

export const getUsers = (): User[] => {
  return users
}

export const getUser = (id: number): User | undefined => {
  return users.find((user) => user.id === id)
}

export const addUser = (user: User): User => {
  users.push(user)
  return user
}

export const updateUser = (user: User): User | undefined => {
  const index = users.findIndex((u) => u.id === user.id)
  if (index !== -1) {
    users[index] = user
    return user
  }
}

export const deleteUser = (id: number): User | undefined => {
  const index = users.findIndex((u) => u.id === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}
