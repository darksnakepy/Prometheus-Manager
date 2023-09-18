import ViewDataProps from "~/types/ViewDataProps";
import Image from "next/image";
import { fetchImage } from "~/utils/FetchImage";
import Trash from "~/../public/SideBarIcons/Trash.svg"
import Cross from "~/../public/SideBarIcons/x.svg"
import { useState, useEffect } from "react";
import { DataRequest } from "~/pages/api/data/deleteData";
import { useRouter } from "next/router";
import postData from "~/utils/fetcher";

const DataView = ({ id, link, email, password, date, notes, onCrossClick, token }: ViewDataProps) => {

  const [passwordHidden, setPasswordHidden] = useState(true)
  const [passwordLen, setPasswordLen] = useState("")
  const [securityStatus, setSecurityStatus] = useState("")
  const router = useRouter();


  useEffect(() => {
    if (password) {
      setPasswordLen("•".repeat(password.length));
    } else {
      setPasswordLen("");
    }
    checkSecurityPass(password)
  }, [password]);

  const onTrashClick = async () => {
    if (token && id) {
      const req: DataRequest = {
        sessionId: token,
        accountId: id
      }
      const registerResponse = await postData("/api/data/deleteData", req)
      router.reload();
    }
  }


  const checkSecurityPass = (password: string) =>{
    const uppercaseLetterRegex = /[A-Z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*_]/;

    const containsUppercaseLetter = uppercaseLetterRegex.test(password);
    const containsDigit = digitRegex.test(password);
    const containsSpecialChar = specialCharRegex.test(password);
  
    if (containsUppercaseLetter && containsDigit && containsSpecialChar && password.length > 16) {
      setSecurityStatus("Password security: Strong");
      console.log(securityStatus);
    } else if(containsUppercaseLetter && containsDigit && password.length > 12) {
      setSecurityStatus("Password security: Good");
      console.log(securityStatus);
    }else if(password.length > 8) {
        setSecurityStatus("Password security: Okay");
        console.log(securityStatus);
    }else{
        setSecurityStatus("Password security: Very Weak");
        console.log(securityStatus);
    }
}

  return (
    <div className="flex flex-row justify-center z-15">
      <div className="w-[50%] h-[60%] bg-[#1c1f20] absolute top-[10%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto">
        <div className="flex items-center flex-col gap-5 overflow-hidden mt-5 mb-2">
          <div className="flex items-center">
            <Image src={fetchImage(link)} width={80} height={80} alt="" className="" />
            <Image src={Trash} width={32} height={32} alt="trash" className="absolute left-[89%] cursor-pointer" onClick={onTrashClick} />
            <Image src={Cross} width={30} height={30} alt="cross" className="absolute left-[93%] cursor-pointer" onClick={onCrossClick} />
          </div>
          <h1 className="text-white text-[28px] font-bold">{link}</h1>
          <div className="w-[65%] flex flex-col text-white space-y-5 mt-3">
            <div className="label-and-value flex items-center">
              <div className="label">Email or Username</div>
              <div className="value absolute left-[64%]">{email}</div>
              <div className="w-[65%] h-[1px] bg-white absolute mt-1 left-0 ml-[17.5%] mt-[7%]" />
            </div>
            <div className="label-and-value flex items-center">
              <div className="label mt-5">Password</div>
              <div className="value absolute left-[64%] mt-5 flex flex-row">{passwordHidden ? passwordLen : password} {passwordHidden ? <Image className="cursor-pointer ml-2 mt-1" width={20} height={20} src={"/eye.svg"} alt="icon" onClick={() => setPasswordHidden(!passwordHidden)} /> : <Image className="cursor-pointer ml-2 mt-1" width={20} height={20} src={"/eye-slash.svg"} alt="icon" onClick={() => setPasswordHidden(!passwordHidden)} />}</div>
              <div className="w-[65%] h-[1px] bg-white absolute mt-1 left-0 ml-[17.5%] mt-[9%]" />
            </div>
            <div className="label-and-value flex items-center">
              <div className="label mt-5">Password Security</div>
              <div className="value absolute left-[64%] mt-5">{securityStatus}</div>
              <div className="w-[65%] h-[1px] bg-white absolute mt-1 left-0 ml-[17.5%] mt-[9%]" />
            </div>
            <div className="label-and-value flex items-center">
              <div className="label mt-5">Created At</div>
              <div className="value absolute left-[64%] mt-5">{date}</div>
              <div className="w-[65%] h-[1px] bg-white absolute mt-1 left-0 ml-[17.5%] mt-[9%]" />
            </div>
            <div className="label-and-value flex items-center">
              <div className="label mt-5">Notes</div>
              <div className="value absolute left-[64%] mt-5">{notes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataView;




