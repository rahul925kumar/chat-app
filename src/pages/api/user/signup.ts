import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');
const saltRounds = 10;
const prisma = new PrismaClient()
const salt = bcrypt.genSaltSync(saltRounds)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const request = JSON.parse(req.body)
  if (req.method == "POST") {
    const check = await prisma.user.findMany({
      where: {
        OR: [
          { email: request.email },
          { username: request.username },
        ]
      }
    })
    if (check.length > 0) {
      return res.status(200).json({ error: true, message: "Email or username already exsits." })
    } else {
      let hashPassword = bcrypt.hashSync(request.password, salt)
      const user = await prisma.user.create({
        data: {
          name: request.name,
          username: request.username,
          email: request.email,
          password: hashPassword
        },
      })
      return res.status(200).json({ error: false, message: user })
    }
  }
  else {
    return res.status(400).json({ error: true, message: 'Invalid request' })
  }
}