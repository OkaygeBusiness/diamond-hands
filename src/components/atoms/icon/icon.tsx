import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface iconProps {
  image?: string
  height?: string
  className?: string
}

export default component$((props: iconProps) => {
  return <img class={twMerge(props.className, props.height ?? "h-6")} src={props.image} alt="icon" />
})
