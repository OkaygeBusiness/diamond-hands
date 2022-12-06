import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import { Link } from "@builder.io/qwik-city"

export interface navbarButtonProps {
  text: string
  link?: string
  image?: string
  height?: string
}

export default component$((props: navbarButtonProps) => {
  return (
    <div class="bg-darkBlue flex flex-col items-center py-2 w-40">
      <Link href={props.link}>
        <div class="flex flex-col items-center">
          <Icon image={props.image} height={props.height} />
        </div>
        <SubHeaderText text={props.text} color="text-white" textSize="text-s" />
      </Link>
    </div>
  )
})
