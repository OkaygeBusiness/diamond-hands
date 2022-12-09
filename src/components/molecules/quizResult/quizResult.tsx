import { component$ } from "@builder.io/qwik"
import Icon from "../../atoms/icon/icon"
import SubHeaderText from "../../atoms/subHeaderText/subHeaderText"
import BodyText from "../../atoms/bodyText/bodyText"
import HeaderText from "../../atoms/headerText/headerText"
import LinkButton from "../../molecules/linkButton/linkButton"

export interface quizResultProps {
  image?: string
  name: string
  score: number
}

export default component$((props: quizResultProps) => {
  return (
    <>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center">
          <Icon image={props.image} class="w-64 rounded-full" height="h-auto" />
        </div>
        <div class="flex justify-center">
          <HeaderText text="Congratulations! 🎉" size="text-3xl" color="text-green-400" />
        </div>
        <div class="flex justify-center">
          <SubHeaderText text={props.name} size="text-2xl" />
        </div>
        <div class="flex justify-center">
          <BodyText text={`${props.score} pts`} />
        </div>
        <div class="flex justify-center">
          <LinkButton text="Home" link="/" />
          <LinkButton text="Leaderboard" link="/leaderboard" />
          <LinkButton text="Guides" link="/guides" />
        </div>
      </div>
    </>
  )
})