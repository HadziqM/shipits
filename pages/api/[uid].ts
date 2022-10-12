import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
    name: string
  }

export default async function handler(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { uid } = req.query
    const ships: any = await prisma.ships.findMany({
      where: {
        username: `${uid}`,
      },
    });
    const spec: any =await Promise.all(ships.map(
      async (e: any) =>
       await prisma.kapals.findUnique({
        where:{
          brand:e.brand
        }
      })
    ))
    res.status(200).json({ name: spec })
  }