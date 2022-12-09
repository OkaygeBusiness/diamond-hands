import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import HeaderText from "../../atoms/headerText/headerText"
import LinkButton from "../linkButton/linkButton"
import NetGain from "../netGain/netGain"

export interface miniCardProps {
  text: string
  headerText: string
  gain: string
  isPositive: boolean
  backgroundColor?: string
  buttonText: string
  link?: string
  image?: string
}

export default component$((props: miniCardProps) => {
  return (
    <>
      <div class={twMerge(props.backgroundColor ?? "bg-darkBlue", "flex flex-col rounded-lg h-auto pt-6 px-4 my-6")}>
        <HeaderText text={props.headerText} size="text-2xl" class="mb-4" />
        <HeaderText text={props.text} class="mb-2" />
        <NetGain text={props.gain} isPositive={props.isPositive} />
        <div class="flex flex-row justify-end mb-4">
          <LinkButton text={props.buttonText} link={props.link} color="bg-lightGreen" />
        </div>
      </div>
    </>
  )
})
