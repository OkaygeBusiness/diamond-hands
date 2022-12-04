import { component$ } from "@builder.io/qwik"

export interface subHeaderTextProps {
  text?: string;
  className?: string;
  href?: string;
}

export default component$((props: subHeaderTextProps) => {
  return <a class={props.className} href={props.href}>{props.text}</a>
})
