import { User } from "../types"

// John Doe is the only real user
export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    image: "/assets/users/john.png",
    currency: "USD",
    wallet: [
      { id: 1, name: "NVIDIA Corporation", shortName: "NVDA", price: 26.24, logo: "/assets/stocks/nvidia.png", shares: 69 },
      { id: 2, name: "Apple Inc.", shortName: "AAPL", price: 1132.13, logo: "/assets/stocks/apple.png", shares: 2 }
    ],
    money: 10000,
    highscore: 0,
    watchlist: [
      { id: 1, name: "NVIDIA Corporation", shortName: "NVDA", price: 26.24, logo: "/assets/stocks/nvidia.png" },
      { id: 2, name: "Apple Inc.", shortName: "AAPL", price: 1132.13, logo: "/assets/stocks/apple.png" },
      { id: 4, name: "Amazon.com, Inc", shortName: "AMZN", price: 88.24, logo: "/assets/stocks/amazon.png" }
    ],
    tradeHistory: [
      {
        stock: { id: 1, name: "NVIDIA Corporation", shortName: "NVDA", price: 26.24, logo: "/assets/stocks/nvidia.png" },
        price: 26.24,
        date: "2022-10-10",
        brokerFee: 0.85,
        amount: 69,
        action: "buy"
      },
      {
        stock: { id: 2, name: "Apple Inc.", shortName: "AAPL", price: 1132.13, logo: "/assets/stocks/apple.png" },
        price: 1132.13,
        date: "2022-10-10",
        brokerFee: 45.29,
        amount: 2,
        action: "buy"
      },
      {
        stock: { id: 3, name: "Microsoft Corporation", shortName: "MSFT", price: 245.12, logo: "/assets/stocks/microsoft.png" },
        price: 245.12,
        date: "2022-10-12",
        brokerFee: 4.29,
        amount: 2,
        action: "sell"
      }
    ]
  },
  { id: 2, name: "Jane Doe", image: "/assets/users/jane.jpg", currency: "USD", money: 10000, highscore: 200, watchlist: [] },
  { id: 3, name: "Will Smith", image: "/assets/users/will.jpg", currency: "CAD", money: 10000, highscore: 180, watchlist: [] },
  { id: 4, name: "Tom Cruise", image: "/assets/users/tom.jpg", currency: "EUR", money: 10000, highscore: 100, watchlist: [] }
]
