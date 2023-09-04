import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";
import Account from "~/types/Account";

interface DataRequest {
    sessionId: string
}

//Get all the accounts
export default async function handler(request: NextApiRequest, response: NextApiResponse<string>){
    if (request.method == "POST"){
        const req = request.body as DataRequest;
        const user = await prisma.user.findUnique({
            where: {
                sessionId: req.sessionId
            }
        })
        if(user) {
            const data: Account[] = await prisma.account.findMany({
                where: {
                    userId: user.id
                }
            })
            
            response.status(200).json(JSON.stringify(data));
        }
    }
}
export type { DataRequest }
