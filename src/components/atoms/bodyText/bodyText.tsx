import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface bodyTextProps {
  text: string
  color?: string
  size?: string
  className?: string
}

export default component$((props: bodyTextProps) => {
  return <p className={twMerge(props.className, props.color ?? "text-black", props.size ?? "text-lg")}>{props.text}</p>
})
