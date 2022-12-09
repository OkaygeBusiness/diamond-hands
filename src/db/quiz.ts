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
        ],
        explanation:
          "A breakaway gap occurs when the price moves beyond its usual range - there is usually a lot of momentum with this move, and we don't expect this gap to fill in the near future."
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
        ],
        explanation:
          "A horn bottom is recognized by two longer than usual downward wicks, separated by a smaller weekly candlestick. It signals a reversal, with entry when the price breaks above the top of the two larger candles."
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
        ],
        explanation:
          "The target for a flag pattern is usually equal to the distance of the move ahead of the pattern. This could be described as the 'flag pole' (think of the flag as flying at half mast)."
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
        ],
        explanation:
          "The double top pattern isn't complete until the neckline has been broken (i.e. the price has dropped below the valley between the two tops)."
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
        ],
        explanation: "A pennant pattern forms after a strong move, followed by a tight continuation pattern in a narrowing range."
      }
    ],
    score: 0
  }
]
