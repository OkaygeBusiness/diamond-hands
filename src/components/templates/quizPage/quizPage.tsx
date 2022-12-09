import { component$ } from "@builder.io/qwik"
import { Question } from "../../../types"
import Header from "../../molecules/header/header"
import BodyText from "../../atoms/bodyText/bodyText"
import Icon from "../../atoms/icon/icon"

export default component$((q: Question) => {
  return (
    <>
      <Header text={"Market Patterns"} />
      <BodyText text={`Question ${q.id} of 5`}></BodyText>
      <BodyText text={q.question}></BodyText>
      <Icon image={q.image} />
      {q.answers.map((a) => (
        <BodyText text={a.answer}></BodyText>
      ))}
    </>
  )
})
