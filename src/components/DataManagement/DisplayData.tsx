import Image from "next/image"
import { useState } from "react"
import ItemList from "./List/ItemList"
import { Modal } from "@mui/material";
import AddData from "./AddData";

/*interface DisplayDataProps{
    link: string 
    icon: string 
    email: string
    date: string
    type: string
}*/

const DisplayData = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="flex flex-row justify-center ml-[15%] z-15">
            <div className="w-[80%] h-[80%] bg-[#1c1f20] absolute top-5 flex-col ml-auto mr-auto">
                <div className="flex flex-row mt-8 ml-[12%] mb-14 ">
                    <h1 className="text-white text-[24px] font-bold">All Items</h1>
                    <button onClick={handleOpen} className="w-[10%] h-[10%] ml-[60%] text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none">Add item</button>
                    <div className="w-[68.5%] h-[2px] bg-white absolute mt-[5%] left-0 ml-[12%] " />

                </div>
                <ItemList items="gfrdkgopfkdpgodf" />
                <Modal open={open} onClose={handleClose}>
                    <div className="text-white">
                        <AddData />
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default DisplayData
