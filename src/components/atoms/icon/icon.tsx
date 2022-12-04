import { component$ } from "@builder.io/qwik"

export interface iconProps {
  image?: string
  height?: string
}

export default component$((props: iconProps) => {
  return <img className={props.height ?? "h-12"} src={props.image} />
})
