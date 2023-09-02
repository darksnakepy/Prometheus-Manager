
import Image from "next/image";
import ListElement from "./ListElement";
//src="data:image/png;base64, 

interface ItemListProps {
    items: string // JSON of all items 
}

//map the list elements
const ItemList = ({items} :ItemListProps) => {
    //add the columns; see ListElement for offset
    return(
        
        <div className="overflow-auto overflow-x-hidden h-full mr-auto ml-auto w-full">
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
        </div>
    )
}

export default ItemList;