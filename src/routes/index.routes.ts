import express from 'express';
import quizRouter from './quiz.routes';
import userRouter from './user.routes';

const router = express.Router();

router.use('/api',quizRouter, userRouter)


export default router;