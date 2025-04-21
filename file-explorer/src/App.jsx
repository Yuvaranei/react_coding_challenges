import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FolderStructure } from './components'
import { data as modelData } from "./model";

function App() {
  const [data, setData] = useState(modelData);

  function searchData(dataa, folderName, inputObject){
    function dfs(searchData){
      searchData?.forEach(item => {
        if(item.name == folderName){
          item.children.push(inputObject);
          return searchData;
        }
        if(item?.children){
          dfs(item.children);
        }
      })
    }

    dfs(dataa);
    setData(dataa);
  }
 

  const updateFolderData = (folderId, folderInput, fileType) => {
    const folderName = folderId.split("_")[0];
    const inputObject = {
      name: folderInput
    }

    if(fileType == 'folder'){
      inputObject.children = [];
    }
    searchData(data, folderName, inputObject);
  }

  return (
    <div className='folder-app'>
      <FolderStructure data={data} updateData={updateFolderData}/>
    </div>
  )
}

export default App
