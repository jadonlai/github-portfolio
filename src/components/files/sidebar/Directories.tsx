import { useState } from "react";

import structure from "../../../constants/directories.json";
import FileDisplay from "./FileDisplay";
import FolderDisplay from "./FolderDisplay";

const Directories = () => {
  const [openFolders, setOpenFolders] = useState<string[]>([]);

  const handleFolderClick = (folder: string) => {
    if (openFolders.includes(folder)) {
      setOpenFolders(openFolders.filter((f) => f !== folder));
    } else {
      setOpenFolders([...openFolders, folder]);
    }
  };
  const renderStructure = (item: {
    name: string;
    type: string;
    contents?: any;
  }) => {
    if (item.type === "folder") {
      return (
        <div>
          <FolderDisplay
            name={item.name}
            onClick={() => handleFolderClick(item.name)}
            handleFolderClick={handleFolderClick}
            openFolders={openFolders}
            contents={item.contents}
            depth={0}
          />
        </div>
      );
    } else {
      return (
        <div>
          <FileDisplay name={item.name} depth={0} />
        </div>
      );
    }
  };

  return (
    <div>
      {structure.folders.map((folder) => renderStructure(folder))}
      {structure.files.map((file) => renderStructure(file))}
    </div>
  );
};

export default Directories;
