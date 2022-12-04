import { component$ } from "@builder.io/qwik"

export interface subHeaderTextProps {
  text?: string;
  className?: string;
}

export default component$((props: subHeaderTextProps) => {
  return <p class={props.className ?? "text-lg"}>{props.text}</p>
})
