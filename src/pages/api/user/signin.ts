import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
      return res.status(200).json({ error: true, message: "User created Sucessfully" })
    }
  }
  else {
    return res.status(400).json({ error: true, message: 'Invalid request' })
  }
}



