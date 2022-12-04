import { component$ } from "@builder.io/qwik"

export interface headerTextProps {
  text: string
  color?: string
  className?: string
}

export default component$((props: headerTextProps) => {
  return <h1 className={props.className ?? (props.color ?? "text-black", "text-3xl font-bold")}>{props.text}</h1>
})
