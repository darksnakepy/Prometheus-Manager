import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";
import Note from "~/types/Note";

interface DataRequest {
    sessionId: string
}
export default async function handler(request: NextApiRequest, response: NextApiResponse<Note[]>){
    if (request.method == "POST"){
        const req = request.body as DataRequest;
        const user = await prisma.user.findUnique({
            where: {
                sessionId: req.sessionId
            }
        })
        if(user) {
            const data: Note[] = await prisma.note.findMany({
                where: {
                    userId: user.id
                },
                select: {
                    id: true,
                    note: true
                }
            })
            
            response.status(200).json(data);
        }
    }
}
export type { DataRequest }
