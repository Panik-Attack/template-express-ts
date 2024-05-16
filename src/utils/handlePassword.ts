import bcrypt from 'bcrypt'

export const encrypt = async (textPlain: string): Promise<string> => {
  const hash = await bcrypt.hash(textPlain, 10)
  return hash
}

export const compare = async (textPlain: string, hashedText: string): Promise<boolean> => {
  return await bcrypt.compare(textPlain, hashedText);
}

