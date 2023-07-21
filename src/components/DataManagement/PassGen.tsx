import { useState } from "react";
import ToggleSwitch from "./switch";
import Repeat from "~/../public/PassGenIcons/repeat.svg"
import Copy from "~/../public/PassGenIcons/Copy.svg"
import Image from "next/image";

const PassGen = () =>{

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(6)
    const [digits, setDigits] = useState(false)
    const [characters, setCharacters] = useState(false)
    const [capitalLetters, setCapitalLetters] = useState(false)
    const [securityStatus, setSecurityStatus] = useState("")
    const [isCopied, setIsCopied] = useState(false)

    const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const digit = "0123456789"
    const specialCh = "!@#$%^&*_"
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    const handleSliderChange = (event: any) => {
        setLength(event.target.value);
      };

    const handleDigitsChange = () =>{
        setDigits(!digits)
    }

    const handleCharactersChange = () =>{
        setCharacters(!characters)
    }

    const handleCapital= () =>{
        setCapitalLetters(!capitalLetters)
    }
    
    const copyButton = () =>{
        if(password){
            navigator.clipboard.writeText(password)
            setIsCopied(true)
        }
    }

    const PasswordGen = (length: number, capitalLetters: boolean, digits: boolean, symbols: boolean) =>{
        let validChars: any = lowercaseLetters
        if(capitalLetters){
            validChars += capitalLetter
        }
        if(digits){
            validChars += digit
        }
        if(symbols){
            validChars += specialCh
        }

        if(length !== 0){
            for(let i = 0; i < length; i++){
                result += validChars.charAt(Math.floor(Math.random() * validChars.length))
            }
        }

        console.log(result)
        setPassword(result)
        checkSecurityPass(result)
    }


    const checkSecurityPass = (password: string) =>{
        const uppercaseLetterRegex = /[A-Z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*_]/;

        const containsUppercaseLetter = uppercaseLetterRegex.test(password);
        const containsDigit = digitRegex.test(password);
        const containsSpecialChar = specialCharRegex.test(password);
      
        if (containsUppercaseLetter && containsDigit && containsSpecialChar) {
          setSecurityStatus("Password security: Strong");
          console.log(securityStatus);
        } else if(containsUppercaseLetter && containsDigit) {
          setSecurityStatus("Password security: Good");
          console.log(securityStatus);
        }else if(containsUppercaseLetter) {
            setSecurityStatus("Password security: Okay");
            console.log(securityStatus);
        }else{
            setSecurityStatus("Password security: Very Weak");
            console.log(securityStatus);
        }
    }


    return (  
        <div className="flex flex-row justify-center ml-[15%] z-15">
          <div className="w-[65%] h-[80%] bg-[#1c1f20] absolute top-[10%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto">
            <div className="flex h-[100%] items-center flex-col gap-25px overflow-hidden">
              <h1 className="text-white text-[24px] font-bold mt-8">PASSWORD GENERATOR</h1>
                <div className="w-[60%] h-[170px] mt-5 bg-[#0e1011] rounded-[15px]"> {/*container for pass */}
                    <h2 className="text-white text-[37px] flex justify-center mt-7">{password}</h2>
                    <h3 className="text-white text-[20px] flex justify-center mt-4">{securityStatus}</h3>
                </div>
                <div className="flex flex-row justify-center mt-3">
                        <button className="w-7 h-1 rounded-full justify-center cursor-pointer" onClick={() => PasswordGen(length, capitalLetters, digits, characters)}>
                            <Image width={28} height={28} src={Repeat} alt={""} className=""/>
                        </button>
                        <button className="w-7 h-1 rounded-full justify-center cursor-pointer ml-2">
                            <Image width={28} height={28} src={Copy} alt={""} onClick={() => copyButton()}/>
                        </button>
                </div>

                <div className="w-[65%] flex flex-row justify-center mt-5">
                    <div className="w-1/4 flex flex-col justfify-center mt-9 ml-7 text-white">
                        <p className="mt-1">Length</p>
                        <p className="mt-8">Capital Letters (A-Z)</p>
                        <p className="mt-8">Digits (0-9)</p>
                        <p className="mt-8">Symbols (!@#$%^&*_)</p>
                    </div>
                    <div className="flex flex-col justfify-center ml-[73%]">
                        <label htmlFor="default-range" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white" >{length}</label>
                        <input id="default-range" type="range" min={6} max={32} value={length} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={handleSliderChange}></input>    
                        <ToggleSwitch onChange={handleCapital}/>
                        <ToggleSwitch onChange={handleDigitsChange} />
                        <ToggleSwitch onChange={handleCharactersChange} />
                    </div>
                    
                </div>
                <div className="flex w-[100%] justify-between ml-[39%] mt-10">
                        <button className="flex-none w-[10%] h-12 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-900 focus:outline-none" onClick={() => PasswordGen(length, capitalLetters, digits, characters)}>Generate</button>
                </div>  
            </div>
          </div>
        </div>
        
    )
}

export default PassGen