import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db"

interface NotesResponse{
    status: string
}

interface NotesRequest{
    header: string
    notes: string
    sessionId: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<NotesResponse>){
    if (request.method == "POST"){
        const req = request.body as NotesRequest
        const user = await prisma.user.findUnique({
            where: {
                sessionId: req.sessionId
            }
        })
        if(user){
            const data = await prisma.note.create({
                data: {
                    header: req.header,
                    note: req.notes,
                }
            })
            return response.status(200).json({status: "success"})
        }
        else return response.status(404).json({status: "error"})
    }

}

export type { NotesRequest, NotesResponse}