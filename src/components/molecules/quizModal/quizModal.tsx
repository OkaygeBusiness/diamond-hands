import { component$, PropFunction } from "@builder.io/qwik"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import BodyText from "../../atoms/bodyText/bodyText"
import Button from "../../atoms/button/button"

export interface quizModalProps {
  text: string
  isCorrect: boolean
  onClick$?: PropFunction<() => void>
}

export default component$((props: quizModalProps) => {
  return (
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {props.isCorrect ? (
        <div class="flex flex-col justify-center items-center">
          <SubHeaderText text="Correct!" size="text-2xl" weight="font-bold" color="text-green-400" />
          <BodyText text={props.text} class="text-center" />
        </div>
      ) : (
        <div class="flex flex-col justify-center items-center">
          <SubHeaderText text="Incorrect!" size="text-2xl" weight="font-bold" color="text-red-400" />
          <BodyText text={props.text} class="text-center" />
        </div>
      )}
      <div class="flex justify-center">
        <Button text="Continue" onClick$={props.onClick$} />
      </div>
    </div>
  )
})
