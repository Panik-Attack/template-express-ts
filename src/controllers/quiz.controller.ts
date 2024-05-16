import { Response } from "express"
import quizModel from "../models/nosql/quiz.model"
import { handlerHttpError } from "../utils/handlerError"
import { matchedData } from "express-validator"

export const getQuiz = async(_req: any, res: Response) => {
  try {
    const data = await quizModel.find({})
    res.send(data)

  } catch (e) {
    handlerHttpError(e, "ERROR_GET_QUIZ")
  }
}

export const sendResponse = async (req: any, res: Response) => {
  try {
    const { idQuiz, IdSelec } = matchedData(req)
    
    const quizList = await quizModel.findById(idQuiz)
    
    const answer = quizList?.answers?.find( (answ: any) => answ.id === IdSelec  )

    if (answer?.isAnswer){
      res.send(true)
    } else {
      res.send(false)
    }
  
  } catch (e) {
    handlerHttpError(e, "ERROR_SEND_RESPONSE" )
  }
}