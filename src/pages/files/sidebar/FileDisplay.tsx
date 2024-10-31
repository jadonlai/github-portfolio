import { Link } from "react-router-dom";

interface FileDisplayProps {
  name: string;
  depth: number;
  path: string;
}

const FileDisplay = ({ name, depth, path }: FileDisplayProps) => {
  return (
    <Link
      to={`/main/${path}`}
      style={{ paddingLeft: depth * 12 + 23 }}
      className="w-full rounded-md flex flex-row py-1 space-x-2 items-center hover:bg-gray-collapsehover"
    >
      <img src="/assets/file.svg" alt="file" className="w-4 h-4" />
      <h1 className="text-secondary truncate pr-2">{name}</h1>
    </Link>
  );
};

export default FileDisplay;
