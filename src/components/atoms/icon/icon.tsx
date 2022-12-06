import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface iconProps {
  image?: string
  height?: string
  className?: string
}

export default component$((props: iconProps) => {
  return <img className={twMerge(props.className, props.height ?? "h-6", "right-6")} src={props.image} alt="icon" />
})
