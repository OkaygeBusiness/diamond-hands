import { Quiz } from "../types"

export const quizzes: Quiz[] = [
  {
    id: 1,
    name: "This is all filler text", // TODO: Change all data to real stock quiz data
    questions: [
      {
        id: 1,
        question: "What is the capital of Sweden?",
        answers: [
          {
            id: 1,
            answer: "Stockholm",
            isAnswer: true
          },
          {
            id: 2,
            answer: "Oslo",
            isAnswer: false
          },
          {
            id: 3,
            answer: "Copenhagen",
            isAnswer: false
          },
          {
            id: 4,
            answer: "Helsinki",
            isAnswer: false
          }
        ]
      }
    ]
  }
]
