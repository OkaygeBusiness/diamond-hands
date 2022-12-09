import { $, component$, PropFunction } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface iconProps {
  image?: string
  height?: string
  onClick$?: PropFunction<() => void>
  class?: string
}

export default component$((props: iconProps) => {
  return (
    <img
      class={twMerge(props.class, props.height ?? "h-6")}
      src={props.image}
      onClick$={
        props.onClick$ ??
        $(() => {
          console.log("Icon clicked")
        })
      }
    />
  )
})
