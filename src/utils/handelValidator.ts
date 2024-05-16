import { NextFunction, Response } from "express"
import { validationResult } from "express-validator"

export const validateResults = (req: any, res: Response , next: NextFunction) => {

  try {
    validationResult(req).throw()
    return next()
  } catch (err: Error | any) {
    res.status(403)
    res.send({ errors: err.array() })
  }
}

