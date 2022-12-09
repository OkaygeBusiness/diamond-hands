import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export interface settingIconProps {
  fill?: string
  stroke?: string
  strokeLinecap?: string
  strokeLinejoin?: string
  strokeWidth?: string
  viewBox?: string
  class?: string
  path?: string
  path2?: string
}

export default component$((props: settingIconProps) => {
  return (
    <div class="text-gray-800">
      <svg
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeLinecap={props.strokeLinecap ?? "round"}
        strokeLinejoin={props.strokeLinejoin ?? "round"}
        strokeWidth={props.strokeWidth ?? "1"}
        viewBox={props.viewBox ?? "0 0 24 24"}
        class={twMerge(props.class ?? "w-5 h-5")}
      >
        <path d={props.path ?? ""} />
        <path d={props.path2 ?? ""} />
      </svg>
    </div>
  )
})
