import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');
const saltRounds = 10;
const prisma = new PrismaClient()
const salt = bcrypt.genSaltSync(saltRounds)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const check = await prisma.user.findMany({
      where: {
        OR: [
          {
            email: req.body.email,
          },
          { username: req.body.username },
        ]
      }
    })
    if (check.length > 0) {
      return res.status(200).json({ error: true, message: "Email or username already exsits." })
    } else {
      let hashPassword = bcrypt.hashSync(req.body.password, salt)
      const user = await prisma.user.create({
        data: {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: hashPassword
        },
      })
      return res.status(200).json({ error: true, message: user })
    }
  }
  else {
    return res.status(400).json({ error: true, message: 'Invalid request' })
  }
}