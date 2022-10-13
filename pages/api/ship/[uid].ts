import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type Data = {
    ship:any
  }

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { uid } = req.query
    const ships: any = await prisma.senses.findFirst({where:{shipid:Number(`${uid}`)},orderBy:{id:"desc"}})
    res.status(200).json({ ship:ships  })
  }