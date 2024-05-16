import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller";
import { validatorLogin, validatorRegister } from "../validations/register";

const userRouter = Router()

userRouter.get(`/user/:id`, validatorLogin ,getUser )

userRouter.post('/user', validatorRegister ,createUser )

export default userRouter