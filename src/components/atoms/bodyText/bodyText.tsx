import { component$ } from "@builder.io/qwik"

export interface bodyTextProps {
  text: string
  color?: string
  className?: string
}

export default component$((props: bodyTextProps) => {
  return <p className={props.className ?? (props.color ?? "text-black", "text-lg")}>{props.text}</p>
})
