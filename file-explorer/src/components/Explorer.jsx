import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { type, type as TYPE } from "../model";

export default function Explorer({ data }) {
    const [expanded, setExpanded] = useState({});
    const [addFileName, setAddFileName] = useState('');
    const [addFolderName, setAddFolderName] = useState('');
    const [showFileInput, setShowFileInput] = useState(false);
    const [showFolderInput, setShowFolderInput] = useState(false);

    const [fileData, setFileData] = useState(data);
  
    const toggleExpand = (name) => {
      setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const onAddFile = (foldername) => {
        const file_data = [...fileData];
        const folderDataIndex = fileData.findIndex((item) => item.name == foldername);

        file_data[folderDataIndex].content.push({
            type: type.FILE,
            name: addFileName,
            content: ''
        });
        setFileData(file_data);
        setAddFileName("");
        setShowFileInput(false);
    }

    const onAddFolder = (foldername) => {
        const file_data = [...fileData];
        const folderDataIndex = fileData.findIndex((item) => item.name == foldername);

        file_data[folderDataIndex].content.push({
            type: type.FOLDER,
            name: addFolderName,
            content: []
        });

        setFileData(file_data);
        setAddFolderName("");
        setShowFolderInput(false);
    }
  
    return (
      <div className="folder-container">
        {fileData.map((item, index) => (
          <div key={index}>
            {item.type == TYPE.FILE ? (
                <span>🗄️ {item.name}</span>
            ): (
                <>
                    <div className="folder-info">
                        <span onClick={() => toggleExpand(item.name)}>📂 {item.name} {expanded[item.name] ? '▼' : '▶︎'}</span>
                        <div className="folder-controls">
                            <AiOutlineFileAdd onClick={() => setShowFileInput(true)} className="icons" size={'30px'}/>
                            <AiOutlineFolderAdd onClick={() => setShowFolderInput(true)} className="icons" size={'30px'}/>
                            <span></span>
                        </div>
                    </div>
                    {showFileInput && (
                    <>
                        <input type="text" 
                            name='add-file' value={addFileName} onChange={(e) => setAddFileName(e.target.value)}/>
                        <button onClick={() => onAddFile(item.name)}>Add</button>
                    </>)}
                    {showFolderInput && (
                    <>
                        <input type="text" 
                            name='add-folder' value={addFolderName} onChange={(e) => setAddFolderName(e.target.value)}/>
                        <button onClick={() => onAddFolder(item.name)}>Add</button>
                    </>)}
                    {item.content.length && expanded[item.name]>0 && <Explorer data={ item.content}/>}
               </>
               )}
          </div>
        ))}
      </div>
    );
  }