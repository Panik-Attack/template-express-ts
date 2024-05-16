import { Response } from "express";
import { handlerHttpError } from "../utils/handlerError";
import { matchedData } from "express-validator";
import { encrypt } from "../utils/handlePassword";
import userModel from "../models/nosql/user.model"

export const getUser = async (req: any, res: Response ) => {
  
  try {
    const { id } = matchedData(req)
    const user = userModel.findById(id)
    res.send( user )

  } catch (e) {
    handlerHttpError(e, "ERROR_GET_USER")
  }
}

export const createUser = async (req: any, res: Response) => {
  
  try {
    req = matchedData(req)
    const password = encrypt(req.password)
    const body = {...req, password }
    const dataUser = await userModel.create(body)

    res.send(dataUser)

  } catch (e) {
    handlerHttpError(e, "ERROR_CREATE_USER")
  }
}