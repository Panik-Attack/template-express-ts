export interface QuizInterface {
  id: number,
  question: string
  answers: Array<AnswerInterface>
}

export interface AnswerInterface {
  id: number
  answer: string
  isAnswer: boolean
}

export interface UserInterface {
  id: string,
  username: string,
  score: number
}