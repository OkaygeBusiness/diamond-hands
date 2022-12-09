import { Quiz, Question, Answer } from "../../types"
import { quizzes } from "../../db"

export const getQuizzes = (): Quiz[] => {
  return quizzes
}

// TODO: Add more functions to quizService.ts
export const getQuiz = (id: number): Quiz | undefined => {
  return quizzes.find((quiz) => quiz.id === id)
}

export const getQuestions = (quizId: number): Question[] => {
  const quiz = getQuiz(quizId)
  return quiz ? quiz.questions : []
}
