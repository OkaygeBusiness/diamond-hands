// TODO: Implement quiz page
import { component$, useStore, useMount$ } from "@builder.io/qwik"
import * as QuizService from "../../../db/api"
import { Quiz, Question, Answer } from "../../../types"
import QuizPage from "../../../components/templates/quizPage/quizPage"

export default component$(() => {
  const store = useStore({
    questions: [] as Question[]
  })
  useMount$(async () => {
    const questions = await QuizService.getQuestions(1)
    store.questions = questions
  })
  return <></>
})
