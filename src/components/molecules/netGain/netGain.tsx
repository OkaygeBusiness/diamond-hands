import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import BodyText from "../../atoms/bodyText/bodyText"
import { twMerge } from "tailwind-merge"

export interface netGainProps {
  text: string
  isPositive: boolean
  class?: string
}

export default component$((props: netGainProps) => {
  return (
    <div class="flex">
      <Icon image={props.isPositive ? "/assets/icons/positive.png" : "/assets/icons/negative.png"} height="h-3" class="mt-2" />
      <BodyText text={props.text} class="ml-2" color="text-gray-500" size="text-md"></BodyText>
    </div>
  )
})
