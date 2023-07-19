import SideBarItems from "../DataManagementSideBar/SideBarItems"
import Image from "next/image"
import AllItemsLogo from "~/../public/SideBarIcons/Allitems.svg"
import Password from "~/../public/SideBarIcons/Password.svg"
import Document from "~/../public/SideBarIcons/Document.svg"
import CreditCard from "~/../public/SideBarIcons/CreditCard.svg"
import Trash from "~/../public/SideBarIcons/Trash.svg"

import Settings from "~/../public/SideBarIcons/Settings.svg"
import User from "~/../public/SideBarIcons/user.svg"
import Check from "~/../public/SideBarIcons/Check.svg"
import Gen from "~/../public/SideBarIcons/Gen.svg"

import Link from "next/link"
import { useState } from "react"
import AddItem from "../DataManagement/AddData"
import PassGen from "../DataManagement/PassGen"

/*interface SideBarProps{
    /*onAllItemsClick: () => void
    onPasswordsClick: () => void
    onNotesClick: () => void
    onCreditCardClick: () => void
    onTrashClick: () => void

}*/


const SideBar = () =>{

    const [activeComponent, setActiveComponent] = useState("")

    const handleClick = (componentName: any) => {
        setActiveComponent(componentName)
    }

    const renderComponent = () =>{
        switch(activeComponent){
            case "AllItems":
                return <AddItem />
            case "Passwords":
                return <PassGen/>
            case "":
                return
            default:
                return null;
        }
    }


    return(
        <div className="w-1/6 h-screen bg-[#181a1b]">
            <div className="flex flex-col gap-2 text-white text-[15px] ml-2">
                <div className="mt-10">
                    <SideBarItems title="All items" icon={AllItemsLogo} onClick={() => handleClick("AllItems")}/>
                    <SideBarItems title="Passwords" icon={Password} onClick={() => handleClick("Passwords")}/>
                    <SideBarItems title="Notes" icon={Document} onClick={() => handleClick("Notes")}/>
                    <SideBarItems title="Credit Cards" icon={CreditCard} onClick={() => handleClick("CreditCards")}/>
                    <SideBarItems title="Trash bin" icon={Trash} onClick={() => handleClick("Trash")}/>
                </div>
            </div>
            <div className="text-white text-[15px] mt-[15%] ml-2"> {/* tools container */}
                <SideBarItems title="Password Generator" icon={Gen} onClick={() =>{}}/>
                <SideBarItems title="Password Health Check" icon={Check} onClick={() =>{}}/>
            </div>
            <div className="fixed bottom-2 left-0 flex flex-row ml-5">
                <Link href="/user/profile"> <Image
                        alt="logo"
                        width="30"
                        height="30"
                        src={User}
                        onClick={() => {}}
                    />
                </Link>
                <Link href="/user/settings"> <Image
                        alt="logo"
                        width="30"
                        height="30"
                        src={Settings}
                        onClick={() => {}}
                    />
                </Link>
            </div>
        </div>
    ) 

}

export default SideBar