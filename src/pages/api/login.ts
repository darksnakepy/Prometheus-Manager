import type { NextApiRequest, NextApiResponse } from "next";
import bycryptjs from "bcryptjs"
import { prisma } from "~/server/db"

interface LoginRequest{
    email: string
    masterPass: string
}

interface LoginResponse{
    sessionId?: string
    error?: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<LoginResponse>){
    if(request.method === "POST"){
        const req = request.body as LoginRequest
        const user = await prisma.user.findFirst({
            where : {
                email: req.email
            }
        })
        if(user){
            const hashedPass = await bycryptjs.compare(req.masterPass, user.masterPass)
            if(hashedPass){
                return response.status(200).json({sessionId: ""}) // fetch user's session id
            }else{
                return response.status(401).json({ error: "Invalid password" })
            }
            
        }else{
            return response.status(404)
        }
    }

}

export type { LoginResponse }