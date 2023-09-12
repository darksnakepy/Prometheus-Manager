const ListElementLoading = () => {
    return (
        <>
        <div className="w-[68.5%] h-20 ml-[12%] border-2 border-[#1545af] rounded-md flex flex-row relative text-white mb-4 cursor-pointer">
           <div className="flex items-center ml-4">
                <div className="w-8 bg-white opacity-30 h-8 rounded-2xl">
                        
                </div>
           </div>
           <div className="flex flex-col justify-center ml-5 ">
                <div className="font-bold bg-white opacity-30 rounded-lg w-14 h-6 mb-1">
                    
                </div>
                <div className="font-bold bg-white opacity-30 rounded-lg h-6 w-40">
                   
                </div>
           </div>
           <div className="absolute left-[50%] flex items-center h-full ">
            <div className=" bg-white opacity-30 rounded-lg w-20 h-6">
                
            </div>
           </div>
        </div>
        </>
    )
}

export default ListElementLoading;
