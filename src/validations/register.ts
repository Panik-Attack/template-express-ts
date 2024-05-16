import { check } from "express-validator"
import { validateResults } from "../utils/handelValidator"
import { NextFunction, Response } from "express"

export const validatorRegister = [
  check('username').exists().notEmpty().isLength({ min: 3, max: 15 }),
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  (req: any, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]

export const validatorLogin = [
  check('password').exists().notEmpty().isLength({ min: 3, max: 15 }),
  check('username').exists().notEmpty().isEmail(),
  (req: any, res: Response, next: NextFunction) => {
    return validateResults(req, res, next)
  }
]