import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"

export interface navbarButtonProps {
  text?: string
  image?: string
  height?: string
}

export default component$((props: navbarButtonProps) => {
  return (
    <div className="bg-darkBlue flex flex-col justify-center items-center py-2 w-20">
      <Icon image={props.image} height={props.height} />
      <SubHeaderText text={props.text} />
    </div>
  )
})
