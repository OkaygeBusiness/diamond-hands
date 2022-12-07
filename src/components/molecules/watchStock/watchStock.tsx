import { component$, QwikMouseEvent } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import BodyText from "../../atoms/bodyText/bodyText"
import { Stock } from "../../../types"

export interface watchStockProps {
  stock: Stock
  change: string
  isPositive?: boolean
  onClick?: (event: QwikMouseEvent) => void
  class?: string
}

export default component$((props: watchStockProps) => {
  return (
    <div class="flex my-4 justify-between">
      <Icon image={props.stock.logo} height="w-16" />
      <div class="flex flex-col w-3">
        <BodyText text={props.stock.name} />
        <BodyText text={props.stock.shortName} color="text-gray-500" />
      </div>
      <div class="flex flex-col w-3">
        <BodyText text={props.stock.price.toString()} />
        <BodyText text={props.change} color={props.isPositive ? "text-green-500" : "text-red-500"} />
      </div>
      <div class="flex flex-col w-6 justify-center">
        <Icon image="/assets/icons/x.png" onClick={props.onClick} />
      </div>
    </div>
  )
})
