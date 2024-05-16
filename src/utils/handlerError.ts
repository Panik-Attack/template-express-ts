export const handlerHttpError = (res: any, mesg = 'ERROR', code = 403) => {
  res.status(code)
  res.send({ error: mesg })
}
