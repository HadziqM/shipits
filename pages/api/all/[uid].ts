import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type Data = {
    name: any
    ship:any
  }

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { uid } = req.query
    const ships: any = await prisma.senses.findMany({where:{shipid:Number(`${uid}`)}})
    res.status(200).json({ name: Number(`${uid}`),ship:ships  })
  }