import { component$ } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import BodyText from "../../atoms/bodyText/bodyText"
import HeaderText from "../../atoms/headerText/headerText"

export interface leaderboardProps {
  score?: number
  name: string
  image?: string
  class?: string
  color?: string
}

export default component$((props: leaderboardProps) => {
  return (
    <>
      <div class="flex justify-center">
        <div class={twMerge(props.class, "flex w-full my-3 p-4", props.color ?? "bg-lightBlue")}>
          <div class="flex flex-row justify-center items-center w-1/4">
            <Icon image={props.image} class="w-20 rounded-full border-white border-2" height="h-auto" />
          </div>
          <div class="flex flex-col justify-center items-center w-1/2">
            <SubHeaderText text={props.name} size="text-2xl" color="text-white" />
            <BodyText text={`${props.score} pts`} />
          </div>
        </div>
      </div>
    </>
  )
})
