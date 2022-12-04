import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"

export enum buttonSize {
  xsmall = "min-w-6 py-1 px-2 text-xs",
  small = "min-w-12 py-1 px-2 text-sm",
  medium = "min-w-24 py-2 px-4 text-base",
  large = "min-w-36 py-3 px-6 text-lg"
}

export interface buttonProps {
  text: string
  className?: string
  color?: string
  size?: buttonSize
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
  icon?: string
}

export default component$((props: buttonProps) => {
  return (
    <button
      className={twMerge(
        props.className ?? "",
        props.size ?? buttonSize.medium,
        "text-white font-bold rounded-md flex flex-row",
        props.color ?? "bg-lightBlue"
      )}
      type={props.type ?? "button"}
      onClick$={
        props.onClick ??
        (() => {
          console.log("Button clicked")
        })
      }
      disabled={props.disabled}
    >
      {props.text}
      <img className="w-6" src={props.icon} />
    </button>
  )
})
