import { Quiz } from "../types"

export const quizzes: Quiz[] = [
  {
    id: 1,
    name: "Market Patterns",
    questions: [
      {
        id: 1,
        question: "Which entry point is the best one for trading this double bottom pattern?",
        image: "/assets/quiz/q1.png",
        answers: [
          {
            id: 1,
            answer: "Breakaway gap",
            isAnswer: true
          },
          {
            id: 2,
            answer: "Common gap",
            isAnswer: false
          },
          {
            id: 3,
            answer: "Exhaustion gap",
            isAnswer: false
          }
        ]
      },
      {
        id: 2,
        question: "The pattern shown below is called a 'horn bottom'. Where does it signal for us to enter a trade?",
        image: "/assets/quiz/q2.png",
        answers: [
          {
            id: 1,
            answer: "A",
            isAnswer: true
          },
          {
            id: 2,
            answer: "B",
            isAnswer: false
          },
          {
            id: 3,
            answer: "C",
            isAnswer: false
          }
        ]
      },
      {
        id: 3,
        question: "For a trade entered on the breakout at X, where would be a sensible target?",
        image: "/assets/quiz/q3.png",
        answers: [
          {
            id: 1,
            answer: "A",
            isAnswer: true
          },
          {
            id: 2,
            answer: "B",
            isAnswer: false
          },
          {
            id: 3,
            answer: "C",
            isAnswer: false
          }
        ]
      },
      {
        id: 4,
        question: "Is this a valid double top pattern?",
        image: "/assets/quiz/q4.png",
        answers: [
          {
            id: 1,
            answer: "Yes",
            isAnswer: true
          },
          {
            id: 2,
            answer: "No",
            isAnswer: false
          }
        ]
      },
      {
        id: 5,
        question: "Name the following pattern...",
        image: "/assets/quiz/q5.png",
        answers: [
          {
            id: 1,
            answer: "Triangle",
            isAnswer: true
          },
          {
            id: 2,
            answer: "Pennant",
            isAnswer: false
          },
          {
            id: 3,
            answer: "Flag",
            isAnswer: false
          }
        ]
      }
    ],
    score: 0
  }
]
