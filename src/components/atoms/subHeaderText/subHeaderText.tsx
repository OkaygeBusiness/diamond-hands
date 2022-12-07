import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface subHeaderTextProps {
  text: string
  size?: string
  weight?: string
  color?: string
  class?: string
}

export default component$((props: subHeaderTextProps) => {
  return <h2 class={twMerge(props.class, props.size ?? "text-xl", props.weight ?? "font-bold", props.color ?? "text-gray-400")}>{props.text}</h2>
})
