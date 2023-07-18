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
}

export default async function handler(request: NextApiRequest, response: NextApiResponse<DataResponse>){
    if (request.method == "POST"){
        const req = request.body as DataRequest
        const user = await prisma.user.findFirst({
            where: {

        }
        });

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

    }
}

export type { DataResponse }