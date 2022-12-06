import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface headerTextProps {
  text: string
  color?: string
  size?: string
  class?: string
}

export default component$((props: headerTextProps) => {
  return <h1 class={twMerge(props.class, props.color ?? "text-white", props.size ?? "text-4xl", "font-bold")}>{props.text}</h1>
})
