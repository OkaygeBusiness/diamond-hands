import { component$ } from "@builder.io/qwik"

export interface subHeaderTextProps {
  text?: string;
}

export default component$((props: subHeaderTextProps) => {
  return <h1 class="text-xl font-bold text-gray-400">{props.text}</h1>
})
