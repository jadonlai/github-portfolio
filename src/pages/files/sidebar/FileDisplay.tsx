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
      className="flex w-full flex-row items-center space-x-2 rounded-md py-1 hover:bg-gray-collapsehover"
    >
      <img
        src="/github-portfolio/assets/file.svg"
        alt="file"
        className="size-4"
      />
      <h1 className="truncate pr-2 text-secondary">{name}</h1>
    </Link>
  );
};

export default FileDisplay;
