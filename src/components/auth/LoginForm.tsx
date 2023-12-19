import { ChangeEvent, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "~/../public/logo.png"
import Image from "next/image";
import { useCookies } from "react-cookie";
import postData from "~/utils/fetcher";
import bcryptjs from "bcryptjs"
import Spinner from "../Spinner/Spinner";

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [masterPass, setMasterPass] = useState("")
    const [cookies, setCookies, removeCookies] = useCookies(["token", "email"]);
    const [spinner, setSpinner] = useState<boolean>(false)
    const [error, setError] = useState("")

    const router = useRouter()

    const submit = async () => {
        setError("")
        if (email !== "" && masterPass !== "") {
            setSpinner(true)
            const hashedPass = await bcryptjs.hash(masterPass, 12)
            const regreq = {
                email: email,
                masterPass: masterPass,
            };
            const loginResponse = await postData("/api/login", regreq);
            setCookies("token", loginResponse.sessionId, { path: "/" });
            setCookies("email", email, { path: "/" })
            await router.replace("/")
        } else {
            setError("Must complete all the forms")
        }
        setSpinner(false)
    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="max-w-[400px] w-[100%] h-[500px] bg-[#1c1f20] top-[20%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto flex">
                <div className="flex items-center flex-col gap-25px overflow-hidden">
                    <Image width="80" height="60" alt="Logo" src={Logo} className="mt-3"></Image>
                    <h1 className="text-white text-[24px] font-bold mt-8">LOG IN</h1>
                    <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} name="username" placeholder="Email" className="outline-none pl-[14px] bg-[#181a1b] mt-5 w-[70%] h-12 mb-[5%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    <input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setMasterPass(e.target.value)} name="masterPass" placeholder="Your master password here" className="outline-none pl-[14px] bg-[#181a1b] w-[70%] h-12 mb-[3%] rounded-[4px] placeholder:text-white/[0.6] placeholder:text-[14px] text-[14px] text-white " />
                    <Link className="text-[#1545af] text-[14px] hover:underline" href={""}>Forgot the master password?</Link>
                    <button 
                    className={`w-[70%] sm:w-[60%] h-[15%] mt-[15%] relative text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm flex items-center justify-center dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none`} onClick={submit}>
                        {
                            spinner ? (
                                <Spinner />
                            ) : 'Login'
                        }
                    </button>
                    <Link className="text-white mt-3 text-[15px] hover:underline" href={"/register"}>Or register</Link>
                    <div className="text-[#b81414]">{error}</div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm    