import { Router } from "express";
import { getQuiz, sendResponse } from "../controllers/quiz.controller";

const quizRouter = Router()

// To get a quiz
quizRouter.get('/quiz', getQuiz )

// To send a answer
quizRouter.post('/quiz', sendResponse )

export default quizRouter