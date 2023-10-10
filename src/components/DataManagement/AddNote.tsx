import { ChangeEvent, useState } from "react";
import React from 'react';
import { useRouter } from "next/router";
import postData from "~/utils/fetcher"; 
import { useCookies } from "react-cookie";
import type { NotesRequest } from "~/pages/api/data/insertNotes";

interface AddDataProps{
    onCloseClick: () => void
}

const AddNote = ({onCloseClick}: AddDataProps) => {
  const [header, setHeader] = useState("");
  const [notes, setNotes] = useState("");
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);
  
  const router = useRouter()    

 const submitNotes = async() => {
    if(header !== "" && notes !== ""){
        const req: NotesRequest = {
            header: header,
            notes: notes,

        }
        const notesResponse = await postData("/api/data/insertNotes", req)
        router.reload();
    }
  }

  return (  
    <div className="flex flex-row justify-center z-15">
      <div className="w-[50%] bg-[#1c1f20] absolute top-[10%] flex-col border-2 border-[#1545af] rounded-2xl ml-auto mr-auto">
        <div className="flex items-center flex-col gap-25px overflow-hidden">
          <h1 className="text-white text-24 font-bold mt-8">Register a password</h1>
          <div className="flex flex-col w-[40%] mt-2">
            <label className="text-white text-sm mb-1" htmlFor="url">Title of the note</label>
            <input type="text" id="url" onChange={(e: ChangeEvent<HTMLInputElement>) => setHeader(e.target.value)} className="outline-none pl-3 bg-[#181a1b] h-12 mb-[5%] rounded-[8px] placeholder-white-[0.6] placeholder-14px text-14px text-white" placeholder="Format: site.com" />
          </div>
          <div className="flex flex-col w-[40%]">
            <label className="text-white text-sm mb-1" htmlFor="notes">Notes</label>
            <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)} id="notes" className="outline-none pl-3 bg-[#181a1b] h-48 resize-y py-2 px-3 rounded-[8px] placeholder-white-[0.6] text-white text-sm" placeholder=""></textarea>
          </div>
          <div className="flex w-[40%] justify-between mt-5 mr-9.5">
            <button onClick={() =>{}} className="flex-none w-[27%] min-w-fit h-10 mt-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#1545af] dark:hover:bg-blue-800 focus:outline-none">Add Data</button>
            <button onClick={onCloseClick} className="flex-none w-[27%] min-w-fit h-10 mt-5 mb-[20%] text-[#444444] bg-[#ffffff] hover:bg-[#ffffff] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-[#ffffff] dark:hover:bg-[#ffffff] focus:outline-0">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
