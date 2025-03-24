import { MdOutlineArrowForwardIos } from "react-icons/md";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { VscCollapseAll } from "react-icons/vsc";
import './index.scss';

export function FolderStructure(){
    return (
        <div className="app-container">
                <div className="main-section">
                    <div className="main-folder">
                        <MdOutlineArrowForwardIos size={'20px'} className="icons"/>
                        Main
                    </div>
                    
                    <div className="main-icons">
                        <AiOutlineFileAdd className="icons" size={'30px'}/>
                        <AiOutlineFolderAdd className="icons" size={'30px'}/>
                        <VscCollapseAll className="icons" size={'30px'}/>
                    </div>
                </div>
        </div>
    )
}