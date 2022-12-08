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
    <div class="w-2/4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Icon class="rounded-t-lg w-full" image={props.image} height="h-full" />
      <HeaderText class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white p-3" size="text-2xl" text={props.headerText} color="text-black" />

      <SubHeaderText class="mb-3 font-normal text-gray-700 dark:text-gray-400 p-3" text={props.text} color="text-gray-400" size="text-s" weight="font-regular" />
    </div>
    </a>
  )
})

{
  /* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div> */
}
