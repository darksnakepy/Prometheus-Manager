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
import PassGen from "../DataManagement/PasswordGeneration/PassGen"
import DisplayData from "../DataManagement/DisplayData"

const SideBar = () =>{

    const [activeComponent, setActiveComponent] = useState("AllItems")

    const handleClick = (componentName: string) => {
        setActiveComponent(componentName)
    }

    const renderComponent = () =>{
        switch(activeComponent){
            case "AllItems":
                return <DisplayData showOnlyPasswords={false} />
            case "Passwords":
                return <DisplayData showOnlyPasswords={true}/>
            case "Notes":
                return
            case "Credit Cards":
                return
            case "pswgen":
                return <PassGen/>
            default:
                return null;
        }
    }


    return(
        <div>
            {renderComponent()}
            <div className="w-1/6 h-screen bg-[#181a1b]"> {/*side bar */}
                <div className="flex flex-col gap-2 text-white text-[15px] ml-2">
                    <div className="mt-10">
                        <SideBarItems title="All items" icon={AllItemsLogo} onClick={() => handleClick("AllItems")} isActive={activeComponent === "AllItems"}/>
                        <SideBarItems title="Passwords" icon={Password} onClick={() => handleClick("Passwords")} isActive={activeComponent === "Passwords"}/>
                        <SideBarItems title="Notes" icon={Document} onClick={() => handleClick("Notes")} isActive={activeComponent === "Notes"}/>
                        <SideBarItems title="Credit Cards" icon={CreditCard} onClick={() => handleClick("CreditCards")} isActive={activeComponent === "CreditCards"}/>
                        <SideBarItems title="Trash bin" icon={Trash} onClick={() => handleClick("Trash")} isActive={activeComponent === "Trash"}/>
                    </div>
                </div>
                <div className="text-white text-[15px] mt-[15%] ml-2"> {/* tools container */}
                    <SideBarItems title="Password Generator" icon={Gen} onClick={() =>handleClick("pswgen")} isActive={activeComponent === "pswgen"}/>
                    <SideBarItems title="Password Health Check" icon={Check} onClick={() =>handleClick("pswhealthcheck")} isActive={activeComponent === "pswhealthcheck"}/>
                </div>
                <div className="fixed bottom-2 left-0 flex flex-row ml-5">
                    <Link href="/user/profile"> <Image alt="logo" width="30" height="30" src={User} onClick={() => {}}/></Link>
                    <Link href="/user/settings"> <Image alt="logo" width="30" height="30" src={Settings} onClick={() => {}}/></Link>
                </div>
            </div>
        </div>
    ) 

}

export default SideBar