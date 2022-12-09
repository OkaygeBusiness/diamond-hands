import { component$ } from "@builder.io/qwik"
import HeaderText from "../../atoms/headerText/headerText"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import Icon from "../../atoms/icon/icon"

// this component will have a header, icon, and text description

export interface smallNewsProps {
  headerText: string
  text: string
  image?: string
  link?: string
}

export default component$((props: smallNewsProps) => {
  return (
    <>
      <a href={props.link} target="_blank">
        <div class="flex flex-row bg-white border rounded-lg shadow-md hover:bg-gray-100 mb-2">
          <Icon class="object-cover w-0 lg:w-80 rounded-l-lg" image={props.image} height="h-auto" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <HeaderText class="mb-2 text-sm font-bold tracking-tight text-gray-900 " text={props.headerText} size="text-xl" color="text-black" />
            <SubHeaderText class="mb-3 font-normal text-gray-700 " text={props.text} size="text-xs" />
          </div>
        </div>
      </a>
      <hr class="my-2 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-400"></hr>
    </>
  )
})
