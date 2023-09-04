import { prisma } from "~/server/db"
import type { NextApiRequest, NextApiResponse } from "next";

interface DataResponse {
    status: string
}

interface DataRequest {
    siteUrl: string,
    userData: string,
    password: string,
    notes: string
    sessionId: string
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<DataResponse>){
    if (request.method == "POST"){
        const req = request.body as DataRequest
        const user = await prisma.user.findUnique({
            where: {
                sessionId: req.sessionId
        }
        });
        if(user) {
            const data = await prisma.account.create({
                data: {
                    userId: user.id,
                    encryptedPass: req.password,
                    webSiteLink: req.siteUrl,
                    notes: req.notes,
                    username: req.userData,
                }
            })
            response.status(200).json({status: "success"})
        }
        else return response.status(404).end();
    }
}

export type { DataResponse }
export type {DataRequest}


/*if(!user){
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
    */