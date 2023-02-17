// lib/prisma.ts
import { PrismaClient } from '@prisma/client';
let prisma;
let global;
prisma = PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global) {
    global = new PrismaClient();
  }
  prisma = global;
}

export default prisma;