import Image from "next/image";
import DisplayDataProps from "~/types/DisplayDataProps";
import { fetchImage } from "~/utils/FetchImage";

const ListElement = ({date, email, icon, link, type, onClick} :DisplayDataProps) => {
    return (
        <>
        <div className="w-[68.5%] h-20 ml-[12%] border-2 border-[#1545af] rounded-md flex flex-row relative text-white mb-4 cursor-pointer" onClick={onClick}>
           <div className="flex items-center ml-4">
                <div className="w-8">
                        <Image src={fetchImage(link)} width={32} height={32} alt={"icon"}></Image>
                </div>
           </div>
           <div className="flex flex-col justify-center ml-5">
                <div className="font-bold">
                    {link}
                </div>
                <div>
                    {email}
                </div>
           </div>
           <div className="absolute left-[50%] flex items-center h-full">
            {date}
           </div>
        </div>
        </>
    )
}

export default ListElement;
