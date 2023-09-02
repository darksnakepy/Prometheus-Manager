import Image from "next/image";
import DisplayDataProps from "~/types/DisplayDataProps";

const ListElement = ({date, email, icon, link, type} :DisplayDataProps) => {
    return (
        <>
        <div className="w-[68.5%] h-20 ml-[12%] border-2 border-[#1545af] rounded-md flex flex-row relative text-white mb-4">
           <div className="flex items-center ml-4">
                <div className="w-16">
                        <Image src="/0yha5ybx1qk71.png" width={64} height={64} alt={"icon"} className="rounded-2xl"></Image>
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

/*
<style>
  .container {
    position: relative;
  }

  .fixed-x {
    position: absolute;
    left: 100px; // Adjust this value to set the desired X-axis position
}
</style>

<div class="container">
  <div>
    Content before the fixed element.
  </div>

  <div class="fixed-x">
    This element is fixed at X = 100px, regardless of previous content length.
  </div>
</div>

<div>
  More content after the fixed element.
</div>

 */