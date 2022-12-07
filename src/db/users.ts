import { User, Currency } from "../types"

export const users: User[] = [
  { id: 1, name: "John Doe", currency: Currency.USD, wallet: 10000, highscore: 0 },
  { id: 2, name: "Jane Doe", currency: Currency.USD, wallet: 10000, highscore: 0 },
  { id: 3, name: "Will Smith", currency: Currency.CAD, wallet: 10000, highscore: 0 },
  { id: 4, name: "Tom Cruise", currency: Currency.EUR, wallet: 10000, highscore: 0 },
  { id: 5, name: "Brad Pitt", currency: Currency.GBP, wallet: 10000, highscore: 0 },
  { id: 6, name: "Angelina Jolie", currency: Currency.AUD, wallet: 10000, highscore: 0 },
  { id: 7, name: "Leonardo DiCaprio", currency: Currency.JPY, wallet: 10000, highscore: 0 },
  { id: 8, name: "Scarlett Johansson", currency: Currency.USD, wallet: 10000, highscore: 0 }
]
