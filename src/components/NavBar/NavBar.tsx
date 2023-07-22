import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

import Image from "next/image";
import Logo from "~/../public/logo.png"

interface NavBarProps{
    onAccountClick?: () => void;
    userLogged?: boolean;
    user?: string
}


const NavBar = ({onAccountClick, userLogged, user} : NavBarProps) =>{
    return(
        <div className="fixed w-full bg-[#181a1b] shadow-sm ">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center overflow-hidden">
                <Link href="/"> <Image
                        alt="logo"
                        width="80"
                        height="60"
                        src={Logo}
                    />
                </Link>
                <div className="flex-row ml-auto gap-8 hidden lg:flex">
                    <div className="flex items-center gap-8 text-white">
                        {userLogged ? <Link href={"/"} className="hover:text-gray-300">{user}</Link> : <Link href={"/login"} className="hover:text-gray-300">Login</Link>}
                        <Link href={""} className="hover:text-gray-300">Features</Link>
                        <Link href={""} className="hover:text-gray-300">Support</Link>
                        <Link href={"/dashboard"} className="hover:text-gray-300">Dashboard</Link>
                    </div>
                </div> 
                    {userLogged ?  "" : <button className="ml-8 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none" onClick={onAccountClick}>Sign up</button>}
                </div>
        </div>
    )
}

export default NavBar
