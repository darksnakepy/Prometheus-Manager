import Image from "next/image";
import DisplayDataProps from "~/types/DisplayDataProps";

const ListElement = ({date, email, icon, link, type} :DisplayDataProps) => {
    return (
        <div className="w-[68.5%] bg-slate-400 h-32 ml-[12%] border-2 border-[#1545af] rounded-2xl flex flex-row">
           <div className="h-16">
                <Image src="/0yha5ybx1qk71.png" width={64} height={64} alt={""}></Image>
           </div>
           
        </div>
    )
}

export default ListElement;