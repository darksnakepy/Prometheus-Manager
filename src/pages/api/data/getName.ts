import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";

interface DataRequest {
    sessionId: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<string>){
    if (request.method == "POST"){
        const req = request.body as DataRequest;

        const user = await prisma.user.findFirst({
            where: {
                sessionId: req.sessionId
            },
            select: {
                email: true,
            }
        })

    if (user) {
        response.status(200).json(JSON.stringify(user));
    }
    }
}
export type { DataRequest }