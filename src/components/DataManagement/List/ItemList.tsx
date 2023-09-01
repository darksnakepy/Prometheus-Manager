
import Image from "next/image";
import ListElement from "./ListElement";
//src="data:image/png;base64, 

interface ItemListProps {
    items: string // JSON of all items 
}

const ItemList = ({items} :ItemListProps) => {
    return(
        <>
            <ListElement date="fottiti" email="fdadw" icon="nicolo" link="ffps" type="fes"></ListElement>
        </>
    )
}

export default ItemList;