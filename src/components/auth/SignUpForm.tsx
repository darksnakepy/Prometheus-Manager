"use client";

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "~/../public/logo.png"
import Image from "next/image";
import postData from "~/utils/fetcher"; 
import { useCookies } from "react-cookie";

const SignUpForm = () =>{

    interface RegisterRequest {
        email: string;
        masterPass: string;
        phoneNumber?: string;
    }

    const [email, setEmail] = useState("")
    const [masterPass, setMasterPass] = useState("")
    const [repeatPass, setRepeatPass] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    const [error, setError] = useState("")

    const router = useRouter();

    const submit = async() =>{
        const [registerReq, setRegisterReq] = useState<RegisterRequest>({ email: "", masterPass: "" });
 
        if(masterPass == repeatPass){
            if(email !== "" && masterPass !== ""){
                if(phoneNumber !== ""){
                    const regreq: RegisterRequest = {
                        email: email,
                        masterPass: masterPass,
                        phoneNumber: phoneNumber
                    };
                    setRegisterReq(regreq)
                }
                else{
                    const regreq: RegisterRequest = {
                        email: email,
                        masterPass: masterPass,
                    };
                    setRegisterReq(regreq)
                }
                const loginResponse = await postData("/api/register", registerReq)
                setCookies("token", loginResponse.sessionId, { path: "/" });
                await router.replace("/");
            }
            else{
                setError("Must complete all the forms")
            }
        }
        else{
            setError("Passwords not matching.")
        }
    }

    return(
        <div className="flex justify-center">
            <div className="w-[25%] h-[70%] bg-[#1c1f20] w-15 absolute top-[15%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto flex">
                <div className="flex items-center flex-col gap-25px overflow-hidden">
                    <Image width="80" height="60" alt="Logo" src={Logo} className="mt-3"></Image> 
                    <h1 className="text-white text-[24px] font-bold mt-8">SIGN UP</h1>
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="email" placeholder="Email" className="outline-none pl-[14px] bg-[#181a1b] mt-5 w-[60%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setMasterPass(e.target.value)} name="masterPass" placeholder="Create a master password" className="outline-none pl-[14px] bg-[#181a1b] mt-1.5 w-[60%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white "/>
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder="Repeat master password " className="outline-none pl-[14px] bg-[#181a1b] mt-1.5 w-[60%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="email" placeholder="Phone number (optional)" className="outline-none pl-[14px] bg-[#181a1b] mt-1.5 w-[60%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    
                    <button className="w-[60%] h-[10%] mt-[5%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none" onClick={submit}>Register</button>
                    <div className="text-white mt-3 text-[15px]">
                        Already a member? <Link className="hover:underline" href={"/login"}>Log in</Link>
                    </div>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm    