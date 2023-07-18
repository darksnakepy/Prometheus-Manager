import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "~/../public/logo.png"
import Image from "next/image";
import { useCookies } from "react-cookie";
import postData from "~/utils/fetcher";
import bcryptjs from "bcryptjs"

const LoginForm = () =>{

    const [email, setEmail] = useState("")
    const [masterPass, setMasterPass] = useState("")
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    const [error, setError] = useState("")

    const router = useRouter()

    const submit = async() =>{      
            setError("")
            if(email !== "" && masterPass !== ""){
                const hashedPass = bcryptjs.hash(masterPass, 12)
                const regreq = {
                    email: email,
                    masterPass: hashedPass,
                };
                const loginResponse = await postData("/api/login", regreq) 
                await router.replace("/")
            }else{
                setError("Must complete all the forms")
            }
        }


    return(
        <div className="flex justify-center">
            <div className="w-[25%] h-[60%] bg-[#1c1f20] w-15 absolute top-[20%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto flex">
                <div className="flex items-center flex-col gap-25px overflow-hidden">
                    <Image width="80" height="60" alt="Logo" src={Logo} className="mt-3"></Image>
                    <h1 className="text-white text-[24px] font-bold mt-8">LOG IN</h1>
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="username" placeholder="Email" className="outline-none pl-[14px] bg-[#181a1b] mt-5 w-[60%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setMasterPass(e.target.value)} name="masterPass" placeholder="Your master password here" className="outline-none pl-[14px] bg-[#181a1b]  w-[60%] h-12 mb-[3%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white "/>
                    <Link className="text-[#1545af] text-[14px] hover:underline" href={""}>Forgot the master password?</Link>
                    <button className="w-[60%] h-[10%] mt-[15%] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none" onClick={submit}>Login</button>
                    <Link className="text-white mt-3 text-[15px] hover:underline" href={"/register"}>Or register</Link>
                    <div>{error}</div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm    