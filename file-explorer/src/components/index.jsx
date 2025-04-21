import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import './index.scss';
import { useState } from "react";

export function FolderStructure({data, updateData}){
    const [folderInput, setFolderInput] = useState("");
    const [enableInput, updateEnableInput] = useState(false);
    const [fileType, updateFileType] = useState("");
    const [activeFolder, setActiveFolder] = useState(null);

    const addFileFolderHandler = (type, folderId) => {
        updateFileType(type);
        updateEnableInput(true)
        setActiveFolder(folderId);
    }

    const reset = () => {
        setActiveFolder(null);
        updateEnableInput(false);
        setFolderInput("");
        updateFileType("");
    }

    const onInputKeyDown = (e, folderId) => {
        if(e.key == "Enter"){
            updateData(folderId, folderInput, fileType);
            reset();
        }
    }

    return (
        <>
            {data.map((item, index) => {
                    const isFolder = item?.children?.length >= 0 || null;
                    const folderId = `${item.name}_${index}`;
                   
                    return (
                        <div className="folder-container" key={folderId}>
                            <div className="folder-title-section">
                                <div className="folder-name-section">
                                    {isFolder && <div className="expand-collapse-icon"></div>}
                                    <div>{item.name}</div>
                                </div>
                                {isFolder && <div className="folder-controls">
                                    <AiOutlineFileAdd className="icons" onClick={() => addFileFolderHandler('file', folderId)} size={'30px'}/>
                                    <AiOutlineFolderAdd className="icons" onClick={() => addFileFolderHandler('folder', folderId)} size={'35px'}/>
                                </div>}
                            </div>
                            {(activeFolder == folderId) && <input type={"text"} onChange={(e) => setFolderInput(e.target.value)}
                                onKeyDown={(e) => onInputKeyDown(e, folderId)} value={folderInput}/>}
                            {item.children && (<div className="children-section">
                                    <FolderStructure data={item.children} updateData={updateData}/>
                            </div>)}
                        </div>
                    )
            })}
       </>
    )
}