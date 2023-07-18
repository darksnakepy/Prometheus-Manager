import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";

interface RegisterResponse {
    sessionId: string
}

interface RegisterRequest {
    email: string;
    masterPass: string;
    phoneNumber: string;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<RegisterResponse>){
    if (request.method == "POST"){
        const req = request.body as RegisterRequest
        const user = await prisma.user.findFirst({
            where: {
            email: req.email
        }
        });

        if(!user){
            const newUser = await prisma.user.create({
                data: {
                    email: req.email,
                    masterPass: req.masterPass,
                    phoneNumber: req.phoneNumber,
                }
            })
            console.log(response)
        
        }else return response.status(404).end();

    } else return response.status(405).end();

}

export type { RegisterResponse }