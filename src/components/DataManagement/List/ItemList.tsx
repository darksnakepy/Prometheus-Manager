
import Image from "next/image";
import ListElement from "./ListElement";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { DataRequest } from "~/pages/api/data/getData";
import postData from "~/utils/fetcher";
import Account from "~/types/Account";
import ListElementLoading from "./ListElementLoading";

//src="data:image/png;base64, 



//map the list elements
const ItemList = () => {
    const [cookies, setCookies, removeCookies] = useCookies(["token"]);
    const [data, setData] = useState<Account[] | null>(null);

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
                {data.map((item, index) => <ListElement key={index} date={item.createdAt.toLocaleDateString('it-IT')} email={item.username} icon={""} link={item.webSiteLink} type={""} />)}
                
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