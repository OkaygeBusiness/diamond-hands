import { Quiz } from "../../types"
import { quizzes } from "../../db"

export const getQuizzes = (): Quiz[] => {
  return quizzes
}

// TODO: Add more functions to quizService.ts
