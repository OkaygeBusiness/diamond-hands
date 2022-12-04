import { component$ } from "@builder.io/qwik"

export interface linkProps {
  text: string
  className?: string
  color?: string
  href: string
}

export default component$((props: linkProps) => {
  return (
    <a className={props.className} href={props.href}>
      {props.text}
    </a>
  )
})
