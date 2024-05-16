import { Router } from "express";
import { getQuiz, sendResponse } from "../controllers/quiz.controller";

const router = Router()



// To get a quiz
router.get('/quiz', getQuiz )

// To send a answer
router.post('/quiz', sendResponse )
