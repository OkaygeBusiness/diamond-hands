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
    <>
      <Link href={props.link}>
        <div className="bg-darkBlue flex flex-col items-center py-3 mx-3 lg:mx-20 sm:w-8 md:w-14 lg:w-20">
          <div className="flex flex-col items-center">
            <Icon image={props.image} height={props.height} />
          </div>
          <SubHeaderText text={props.text} color="text-white" textSize="text-s" />
        </div>
      </Link>
    </>
  )
})
