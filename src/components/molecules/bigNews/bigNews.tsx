import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import HeaderText from "../../atoms/headerText/headerText"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import Icon from "../../atoms/icon/icon"

// this component will have a header, icon, and text description

export interface bigNewsProps {
  headerText: string
  text: string
  image: string
  link: string
}

export default component$((props: bigNewsProps) => {
  console.log(props.image)
  return (
    <a href={props.link}>
    <div class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Icon class="rounded-t-lg w-full" image={props.image} height="h-full" />
      <HeaderText class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white p-3" size="text-2xl" text={props.headerText} color="text-black" />

      <SubHeaderText class="mb-3 font-normal text-gray-700 dark:text-gray-400 p-3" text={props.text} color="text-gray-400" size="text-s" weight="font-regular" />
    </div>
    </a>
  )
})