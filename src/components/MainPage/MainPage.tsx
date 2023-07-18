import { GoArrowUpRight } from "react-icons/go"
import { useRouter } from "next/router"

const MainPage = () =>{

    const router = useRouter()

    return(
        <div className=""> {/* Main Container */}
            <div className=""> {/* Main text should be alligned to the left (and title too) */}
                <h1 className="font-bold">Prometheus Manager - digital manager</h1> {/* Title */}
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <p className="text-[#d2cec8] font-normal text-[23px] w-[25%] mr-[20%]"><span className="font-bold text-[#d2cec8]">Prometheus Manager</span> is a strong password and <span className="font-bold text-[#d4d4d4]">*SOON*</span> a credit card and payment methods manager
                developed by Prometheus Solution. It allows access to all your private data with a simple passkey. You can find all the features below.</p> 
                <button className="font-bold text-white text-[25px] bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-3.5 dark:bg-[#1545af] dark:hover:bg-blue-800 mt-7 flex justify-start mr-[38%]" onClick={() => {router.push("/features")}}>Quickstart <GoArrowUpRight className="ml-1 mt-1"/></button> 
            </div>
            {/*maybe add an image to the right of the text as a preview*/}
        </div>
    )
}

export default MainPage
