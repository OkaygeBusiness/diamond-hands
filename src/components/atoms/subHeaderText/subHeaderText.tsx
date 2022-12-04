import { component$ } from "@builder.io/qwik"

export interface subHeaderTextProps {
  text?: string;
  className?: string;
}

export default component$((props: subHeaderTextProps) => {
  return <h2 class={props.className ?? "text-xl font-bold"}>{props.text}</h2>
})
