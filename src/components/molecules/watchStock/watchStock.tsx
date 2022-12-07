import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import BodyText from "../../atoms/bodyText/bodyText"
import { Stock } from "../../../types"
import { twMerge } from "tailwind-merge"

export interface watchStockProps {
  stock: Stock
  isPositive?: boolean
  class?: string
}

export default component$((props: watchStockProps) => {
  return <div class="flex"></div>
})
