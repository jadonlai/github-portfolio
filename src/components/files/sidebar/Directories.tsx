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
    contents?: { name: string; type: string }[];
  }) => {
    if (item.type === "folder") {
      return (
        <FolderDisplay
          key={item.name}
          name={item.name}
          onClick={() => handleFolderClick(item.name)}
          handleFolderClick={handleFolderClick}
          openFolders={openFolders}
          contents={item.contents}
          depth={0}
          path={item.name}
        />
      );
    } else {
      return (
        <FileDisplay
          key={item.name}
          name={item.name}
          depth={0}
          path={item.name}
        />
      );
    }
  };

  return <div>{structure.map((dir) => renderStructure(dir))}</div>;
};

export default Directories;
