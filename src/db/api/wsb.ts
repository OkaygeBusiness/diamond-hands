import { Wsb } from "../../types"

export const wsb = async (): Promise<Wsb[]> => {
  const response = await fetch("https://tradestie.com/api/v1/apps/reddit")
  return response.json()
}
