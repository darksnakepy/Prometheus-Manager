
import Image from "next/image";
import ListElement from "./ListElement";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { DataRequest } from "~/pages/api/data/getData";
import postData from "~/utils/fetcher";
import Account from "~/types/Account";
import ListElementLoading from "./ListElementLoading";
import { Modal } from "@mui/material";
import DataView from "../ViewData/ViewData";
import Trash from "~/../public/SideBarIcons/Trash.svg";
//src="data:image/png;base64, 



//map the list elements
const ItemList = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    const [data, setData] = useState<Account[] | null>(null);
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(null)
    const [open, setOpen] = useState(false)

    const handleOpen = (account: Account) => {
        setSelectedAccount(account)
        setOpen(true)
    }

    const handleClose = () => setOpen(false);

    const functi = () =>{
        console.log("diocane")
    }

    useEffect(() => {
        async function fetchData(funcSessionId: string) {
            const req: DataRequest = {
                sessionId: funcSessionId
            }
            const res: Account[] = JSON.parse(await postData("/api/data/getData", req)) as Account[];
            //The date type gets sent as a string so it needs to be converted back to a date
            res.forEach(element => {
                let date = element.createdAt as unknown as string;
                element.createdAt = new Date(date);
                date = element.updatedAt as unknown as string;
                element.updatedAt = new Date(date);
            });
            setData(res);
        }

        fetchData(cookies.token);
    }, [])


    //TODO: add the columns; see ListElement for offset
    if(data != null) {
        return(
            <div className="overflow-auto overflow-x-hidden h-full mr-auto ml-auto w-full">
                {data.map((item, index) => <div><ListElement key={index} date={item.createdAt.toLocaleDateString('it-IT')} email={item.username} link={item.webSiteLink} type={""} onClick={() => handleOpen(item)}></ListElement>
                    
            </div>
                 
                )}
                <Modal open={open} onClose={handleClose}>
                        <div className="text-white">
                            {selectedAccount && (
                                <DataView link={selectedAccount.webSiteLink} 
                                    email={selectedAccount.username} 
                                    password={selectedAccount.encryptedPass} 
                                    date={""} notes={selectedAccount.notes} 
                                    passwordSecurity={selectedAccount.passwordSecurity} 
                                    onTrashClick={() =>{functi}}
                                    onCrossClick={() =>{handleClose}}/>
                            )}
                        </div>
                </Modal>
                
            </div>
        )
    }
    else {
        return (
            <div className="overflow-auto overflow-x-hidden h-full mr-auto ml-auto w-full">
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
                <ListElementLoading></ListElementLoading>
            </div>
        )
    }
}

export default ItemList;

/*
<ListElement date="20/20/20" email="giglo@gmail.com" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
<ListElement date="20/20/20" email="giglo@gmail.comfdfdsdfsfsdfsd" icon="nicolo" link="link" type="type"></ListElement>
*/