import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import { Link } from "@builder.io/qwik-city"

export interface linkProps {
  text: string
  className?: string
  color?: string
  href: string
}

export default component$((props: linkProps) => {
  return (
    <Link className={twMerge(props.className, props.color ?? "bg-lightBlue")} href={props.href}>
      {props.text}
    </Link>
  )
})
