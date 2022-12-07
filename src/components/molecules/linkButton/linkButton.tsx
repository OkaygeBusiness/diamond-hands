import { $, component$, QwikMouseEvent } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import Icon from "../../atoms/icon/icon"
import { Link } from "@builder.io/qwik-city"

export enum buttonSize {
  xsmall = "min-w-6 py-1 px-2 text-xs",
  small = "min-w-12 py-1 px-2 text-sm",
  medium = "min-w-24 py-2 px-4 text-base",
  large = "min-w-36 py-3 px-6 text-lg"
}

export interface buttonProps {
  image?: string
  text?: string
  color?: string
  size?: buttonSize
  type?: "button" | "submit" | "reset"
  link?: string
  disabled?: boolean
  icon?: string
  class?: string
}

export default component$((props: buttonProps) => {
  return (
    <Link href={props.link}>
      <button
        class={twMerge(
          props.class ?? "",
          props.size ?? buttonSize.medium,
          "text-white font-bold rounded-md flex flex-row",
          props.color ?? "bg-lightBlue"
        )}
        type={props.type ?? "button"}
        disabled={props.disabled}
      >
        {props.image && <Icon image={props.image} />}
        {props.text}
        {props.icon && <img class="w-6" src={props.icon} />}
      </button>
    </Link>
  )
})
