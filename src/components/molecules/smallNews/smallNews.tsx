import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
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
  console.log(props.image)
  return (
    <>
      <a
        href={props.link}
      >
        <div class="flex flex-row bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-5 w-2/4">
        <Icon class="object-cover w-full rounded-l-lg" image={props.image} height="h-auto" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <HeaderText class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white" text={props.headerText} size="text-xl" />
          <SubHeaderText class="mb-3 font-normal text-gray-700 dark:text-gray-400" text={props.text} size="text-xs" />
        </div>
        </div>
      </a>
      <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-400"></hr>
    </>
  )
})
