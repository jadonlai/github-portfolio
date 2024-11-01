import { Link } from "react-router-dom";

interface ItemProps {
  imagePath: string;
  imageAltText: string;
  name: string;
  routePath?: string;
  commit: string;
  date: string;
}

const Item = ({
  imagePath,
  imageAltText,
  name,
  routePath,
  commit,
  date,
}: ItemProps) => {
  return (
    <li
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
      className="h-[42px] bg-primary hover:bg-primary-200 grid grid-cols-3 items-center px-3"
    >
      <div className="flex flex-row items-center space-x-2">
        <img src={imagePath} alt={imageAltText} className="w-4 h-4" />
        {routePath || name === ".." ? (
          <Link
            to={`/main${routePath}`}
            className={`${
              name === ".."
                ? "text-gray font-bold"
                : "text-secondary hover:underline"
            } text-sm hover:text-blue`}
          >
            {name === ".." ? name.split("").join(" ") : name}
          </Link>
        ) : (
          <h1 className="text-secondary text-sm truncate">{name}</h1>
        )}
      </div>
      <p className="text-gray text-sm truncate">{commit}</p>
      <p className="text-gray text-sm text-right truncate">{date}</p>
    </li>
  );
};

export default Item;
