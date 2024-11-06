import { Link } from "react-router-dom";

import FileDisplay from "./FileDisplay";

interface FolderDisplayProps {
  name: string;
  onClick: () => void;
  handleFolderClick: (folder: string) => void;
  openFolders: string[];
  contents?: {
    name: string;
    type: string;
    contents?: { name: string; type: string }[];
  }[];
  depth: number;
  path: string;
  curPathItem: string;
}

const FolderDisplay = ({
  name,
  onClick,
  handleFolderClick,
  openFolders,
  contents,
  depth,
  path,
  curPathItem,
}: FolderDisplayProps) => {
  return (
    <>
      <Link
        to={`/main/${path}`}
        style={{ paddingLeft: depth * 12 }}
        className={`flex w-full flex-row items-center space-x-1 rounded-md hover:bg-gray-collapsehover ${curPathItem === name ? "bg-gray-collapseopen hover:bg-gray-collapseopen" : ""}`}
      >
        <button
          onClick={(event) => {
            event.preventDefault();
            onClick();
          }}
          className="rounded-md p-1 hover:bg-gray-chevronhover"
        >
          <img
            src={`/github-portfolio/assets/chevron_${
              openFolders.includes(name) ? "open" : "closed"
            }.svg`}
            alt={`${openFolders.includes(name) ? "open" : "closed"}`}
            className="size-3"
          />
        </button>
        <div className="flex flex-row items-center space-x-2 py-1">
          <img
            src={`/github-portfolio/assets/folder${
              openFolders.includes(name) ? "_open" : ""
            }.svg`}
            alt={`folder${openFolders.includes(name) ? "_open" : ""}`}
            className="size-4"
          />
          <h1 className="truncate pr-2 text-secondary">{name}</h1>
        </div>
      </Link>
      {openFolders.includes(name) && contents && (
        <div key={name}>
          {contents.map((content) => (
            <div key={content.name}>
              {content.type === "folder" ? (
                <FolderDisplay
                  name={content.name}
                  onClick={() => handleFolderClick(content.name)}
                  handleFolderClick={handleFolderClick}
                  openFolders={openFolders}
                  contents={content.contents}
                  depth={depth + 1}
                  path={`${path}/${content.name}`}
                  curPathItem={curPathItem}
                />
              ) : (
                <FileDisplay
                  name={content.name}
                  depth={depth + 1}
                  path={`${path}/${content.name}`}
                  curPathItem={curPathItem}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FolderDisplay;
