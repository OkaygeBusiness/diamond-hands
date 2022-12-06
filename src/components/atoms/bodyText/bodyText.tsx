import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface bodyTextProps {
  text: string
  color?: string
  size?: string
  class?: string
}

export default component$((props: bodyTextProps) => {
  return <p class={twMerge(props.class, props.color ?? "text-black", props.size ?? "text-lg")}>{props.text}</p>
})
