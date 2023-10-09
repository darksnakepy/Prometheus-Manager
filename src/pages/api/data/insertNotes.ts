import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db"

interface NotesResponse{
    status: string
}

interface NotesRequest{
    header: string
    notes: string
    userId: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<NotesResponse>){
    if (request.method == "POST"){
        const req = request.body as NotesRequest
        const user = await prisma.user.findUnique({
            where: {
                id: req.userId
            }
        })
        if(user){
            const data = await prisma.
            })
        }



    }

}

export type { NotesRequest, NotesResponse}