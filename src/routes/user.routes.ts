import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller";

const router= Router()

router.get('/user', getUser )

router.post('/user', createUser )