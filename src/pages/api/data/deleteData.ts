import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";

interface DataRequest {
    sessionId: string,
    accountId: string
}

//Delete the account
export default async function handler(request: NextApiRequest, response: NextApiResponse<string>){
    if (request.method == "POST"){
        const req = request.body as DataRequest;
        const user = await prisma.user.findUnique({
            where: {
                sessionId: req.sessionId
            }
        })
        if(user) {
            await prisma.account.delete({
                where: {
                    id: req.accountId
                }
            })
        }
        response.status(200).json("Account deleted");
    }
}
export type { DataRequest }
