import { useState } from "react";
import { type } from "../model";

export default function Folder({data}){
    const [isExpanded, setExpanded] = useState(false);

    const displayFolder = () => {
        return data.map((item) => {
            if(item.type == type.FILE){
                return <div>{item.name}</div>
            } else{
                return (
                    <div>
                        <div>{item.name}</div>
                        <Folder data={item.content}/>
                    </div>
                );
            }
        })
    }
    return (
        <div className="folder-container">
            {displayFolder()}
        </div>
    )
}