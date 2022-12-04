import { component$ } from "@builder.io/qwik"

export interface headerTextProps {
  text?: string;
  className?: string;
}

export default component$((props: headerTextProps) => {
  return <h1 class={props.className ?? "text-3xl font-bold"}>{props.text}</h1>
})
