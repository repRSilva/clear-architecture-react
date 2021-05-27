export type RemoteSurveyResultModel = {
  question: string
  date: string
  answers: RemoteSurveyResultAnserModel[]
}

export type RemoteSurveyResultAnserModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}
