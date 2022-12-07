import { $, component$, QwikMouseEvent } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import Icon from "../../atoms/icon/icon"
import Button from "../../atoms/button/button"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import HeaderText from "../../atoms/headerText/headerText"

export interface miniCardProps {
  text: string
  subText: string
  buttonText: string
  backgroundColor?: string
  link?: string
  image?: string
  onClick?: (event: QwikMouseEvent) => void
}

export default component$((props: miniCardProps) => {
  return (
    <>
      <div class={twMerge(props.backgroundColor ?? "bg-darkBlue", "flex flex-col rounded-lg p-4 my-8")}>
        <div class="flex justify-between">
          <HeaderText text={props.text} />
          <Icon image={props.image} />
        </div>
        <SubHeaderText text={props.subText} class="mb-5" />
        <div class="flex justify-end">
          <Button text={props.buttonText} onClick={props.onClick} />
        </div>
      </div>
    </>
  )
})
