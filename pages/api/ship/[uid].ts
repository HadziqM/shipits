import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { uid } = req.query
    const ships: any = await prisma.senses.findFirst({
      where: {shipname:`${uid}`}
    })
    res.status(200).json({ name: `idc ${uid}` })
  }