import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');
const saltRounds = 10;
const prisma = new PrismaClient()
const salt = bcrypt.genSaltSync(saltRounds)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })
    if (user) {
      let pass_valid = await bcrypt.compare(req.body.password, user.password);
      if (pass_valid)
        return res.status(200).json({ error: false, message: "User Login Successfully" })
      else
        return res.status(200).json({ error: false, message: "Invalid Password" })
    } else {
      return res.status(200).json({ error: true, message: "Invalid Email!" })
    }
  }
  else {
    return res.status(405).json({ error: true, message: 'Invalid request' })
  }
}