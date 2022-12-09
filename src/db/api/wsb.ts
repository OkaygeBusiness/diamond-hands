import { Wsb } from "../../types"
import axios from "axios"

export const wsb = async (): Promise<Wsb[]> => {
  const { data } = await axios.get("https://tradestie.com/api/v1/apps/reddit")
  return data.slice(0, 10)
}
