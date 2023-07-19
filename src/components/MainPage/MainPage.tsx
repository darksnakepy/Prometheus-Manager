import { GoArrowUpRight } from "react-icons/go"
import { useRouter } from "next/router"

const MainPage = () =>{

    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center mb-8 "> {/* Main text should be centered */}
                <h1 className="font-bold text-white text-[48px]">PROMETHEUS MANAGER: DIGITAL MANAGER</h1> {/* Title */}
            </div>
            <div className="text-center mb-8"> {/* Main text should be centered */}
                <p className="text-[#d2cec8] font-normal text-lg md:text-xl w-11/12 md:w-1/4 mx-auto">
                    <span className="font-bold text-[#d2cec8]">Prometheus Manager</span> is a strong password and <span className="font-bold text-[#d4d4d4]">*SOON*</span> a credit card and payment methods manager developed by Prometheus Solution. It allows access to all your private data with a simple passkey. You can find all the features below.
                </p> 
            </div>
            <button className="font-bold text-white text-[25px] bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-3.5 dark:bg-[#1545af] dark:hover:bg-blue-800 mt-7 flex justify-start" onClick={() => {router.push("/features")}}>Quickstart <GoArrowUpRight className="ml-1 mt-1"/></button> 
            {/*<div className="w-full bg-black">
                <p> diocane </p>
            </div>
            */}
        </div>

    )
}

export default MainPage
