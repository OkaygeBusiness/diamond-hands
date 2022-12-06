import { $, component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import Button from "../../atoms/button/button"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import { Link } from "@builder.io/qwik-city"
import HeaderText from "../../atoms/headerText/headerText"

export interface miniCardProps {
  text: string
  subText: string
  backgroundColor?: string
  link?: string
  image?: string
}

export default component$((props: miniCardProps) => {
  const handleButtonClick = () => {
    $(() => {
      console.log("Button clicked")
    })
  }
  return (
    <>
      <div class={twMerge(props.backgroundColor ?? "bg-darkBlue", "flex flex-col rounded-lg p-4 my-8")}>
        <HeaderText text={props.text} />
        <SubHeaderText text={props.subText} class="mb-5" />
        <Button text="View" class="ml-48" />
      </div>
    </>
  )
})
