import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import { Link } from "@builder.io/qwik-city"

export interface miniCardProps {
  text: string
  backgroundColor?: string
  link?: string
  image?: string
}

export default component$((props: miniCardProps) => {
  return (
    <>
      <div></div>
    </>
  )
})
