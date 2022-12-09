// TODO: Implement quiz page
import { component$, useStore, useMount$, $ } from "@builder.io/qwik"
import { Question, Answer } from "../../../../types"
import Header from "../../../../components/molecules/header/header"
import BodyText from "../../../../components/atoms/bodyText/bodyText"
import Icon from "../../../../components/atoms/icon/icon"
import * as QuizService from "../../../../db/api"
import * as UserService from "../../../../db/api"
import QuizModal from "../../../../components/molecules/quizModal/quizModal"
import QuizResult from "../../../../components/molecules/quizResult/quizResult"

export default component$(() => {
  const user = UserService.getUser(1)
  const store = useStore({
    questions: [] as Question[],
    page: 0,
    showModal: false,
    correct: false,
    endOfQuiz: false,
    score: 0
  })
  useMount$(async () => {
    const questions = await QuizService.getQuestions(1)
    store.questions = questions
  })
  const handleAnswer = $((id: number) => {
    if (store.questions[store.page]?.answers[id - 1]?.isAnswer) {
      store.correct = true
      store.score += 100
      store.showModal = true
    } else {
      store.correct = false
      store.showModal = true
      store.score -= 20
      console.log("Wrong Answer")
    }
  })
  const handleShowModal = $(() => {
    if (store.correct) {
      store.page++
    }
    if (store.page === 5) {
      store.endOfQuiz = true
    }
    store.showModal = false
  })
  return (
    <div class="flex flex-col justify-center">
      <Header text={"Market Patterns"} />
      {store.endOfQuiz ? (
        <QuizResult name={user!.name} score={store.score} image={user!.image} />
      ) : store.showModal ? (
        <QuizModal text={`Your current score is ${store.score}`} isCorrect={store.correct} onClick$={() => handleShowModal()} />
      ) : (
        <>
          <div class="flex justify-center mb-6">
            <BodyText text={`Question ${store.questions[store.page]?.id} of 5`}></BodyText>
          </div>
          <BodyText text={store.questions[store.page]?.question}></BodyText>
          <div class="flex justify-center">
            <Icon image={store.questions[store.page]?.image} class="w-96" height="h-auto" />
          </div>
          {store.questions[store.page]?.answers.map((a: Answer) => (
            <div class="flex justify-center border-2 my-2 h-12 border-black" onClick$={() => handleAnswer(a?.id)}>
              <BodyText text={a?.answer} class="justify-self-center"></BodyText>
            </div>
          ))}
        </>
      )}
    </div>
  )
})
