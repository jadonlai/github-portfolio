import { Link } from "react-router-dom";

interface ItemProps {
  imagePath: string;
  imageAltText: string;
  name: string;
  routePath?: string;
  commit: string;
  date: string;
  lastItem?: boolean;
}

const Item = ({
  imagePath,
  imageAltText,
  name,
  routePath,
  commit,
  date,
  lastItem,
}: ItemProps) => {
  return (
    <li
      style={{
        gridTemplateColumns: "1.5fr 1fr 1fr",
      }}
      className={`h-[42px] bg-primary hover:bg-primary-200 grid grid-cols-3 items-center border-t-[1px] border-t-gray-border px-3 ${
        lastItem && "rounded-b-md"
      }`}
    >
      <div className="flex flex-row items-center space-x-2">
        <img src={imagePath} alt={imageAltText} className="w-4 h-4" />
        {routePath ? (
          <Link
            to={routePath}
            className="text-secondary text-sm hover:text-blue hover:underline"
          >
            {name}
          </Link>
        ) : (
          <h1 className="text-secondary text-sm">{name}</h1>
        )}
      </div>
      <p className="text-gray text-sm">{commit}</p>
      <p className="text-gray text-sm text-right">{date}</p>
    </li>
  );
};

export default Item;
