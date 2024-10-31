import FileDisplay from "./FileDisplay";

interface FolderDisplayProps {
  name: string;
  onClick: () => void;
  handleFolderClick: (folder: string) => void;
  openFolders: string[];
  contents?: {
    name: string;
    type: string;
    contents?: any;
  }[];
  depth: number;
  path: string;
}

const FolderDisplay = ({
  name,
  onClick,
  handleFolderClick,
  openFolders,
  contents,
  depth,
  path,
}: FolderDisplayProps) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ paddingLeft: depth * 12 + 3 }}
        className="w-full rounded-md flex flex-row py-1 space-x-2 items-center hover:bg-gray-collapsehover"
      >
        <img
          src={`/assets/chevron_${
            openFolders.includes(name) ? "open" : "closed"
          }.svg`}
          alt={`${openFolders.includes(name) ? "open" : "closed"}`}
          className="w-3 h-3"
        />
        <img
          src={`/assets/folder${openFolders.includes(name) ? "_open" : ""}.svg`}
          alt={`folder${openFolders.includes(name) ? "_open" : ""}`}
          className="w-4 h-4"
        />
        <h1 className="text-secondary truncate pr-2">{name}</h1>
      </button>
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
                />
              ) : (
                <FileDisplay
                  name={content.name}
                  depth={depth + 1}
                  path={`${path}/${content.name}`}
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
