import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface settingOptionTextProps {
  title?: string
  description?: string
  color?: string
}

export default component$((props: settingOptionTextProps) => {
  return (
    <div class="pl-3">
      <p class={twMerge("text-sm font-medium leading-none", props.color ?? "text-gray-800")}>{props.title}</p>
      <p class="text-xs text-gray-500">{props.description ?? ""}</p>
    </div>
  )
})
