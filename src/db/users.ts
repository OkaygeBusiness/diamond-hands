import { User, Currency } from "../types"

export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/users/john.png",
    currency: Currency.USD,
    wallet: 10000,
    highscore: 0,
    watchlist: [
      { id: 1, name: "Nvidia", shortName: "NVDA", price: 26.24, logo: "/assets/stocks/nvidia.png" },
      { id: 2, name: "Apple", shortName: "AAPL", price: 1132.13, logo: "/assets/stocks/apple.png" },
      { id: 4, name: "Amazon", shortName: "AMZN", price: 88.24, logo: "/assets/stocks/amazon.png" }
    ],
    tradeHistory: [
      {
        stock: { id: 1, name: "Nvidia", shortName: "NVDA", price: 26.24, logo: "/assets/stocks/nvidia.png" },
        price: 26.24,
        date: "2022-10-10",
        brokerFee: 81.5,
        ammount: 69
      },
      {
        stock: { id: 2, name: "Apple", shortName: "AAPL", price: 1132.13, logo: "/assets/stocks/apple.png" },
        price: 1132.13,
        date: "2022-10-10",
        brokerFee: 45.29,
        ammount: 2
      }
    ]
  },
  { id: 2, name: "Jane Doe", currency: Currency.USD, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 3, name: "Will Smith", currency: Currency.CAD, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 4, name: "Tom Cruise", currency: Currency.EUR, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 5, name: "Brad Pitt", currency: Currency.GBP, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 6, name: "Angelina Jolie", currency: Currency.AUD, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 7, name: "Leonardo DiCaprio", currency: Currency.JPY, wallet: 10000, highscore: 0, watchlist: [] },
  { id: 8, name: "Scarlett Johansson", currency: Currency.USD, wallet: 10000, highscore: 0, watchlist: [] }
]
