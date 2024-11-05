import { Link } from "react-router-dom";

interface ItemProps {
  imagePath: string;
  imageAltText: string;
  name: string;
  routePath?: string;
  commit: string;
  date: string;
  lastItem: boolean;
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
      className={`grid h-[42px] items-center bg-primary px-3 hover:bg-primary-200 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ${lastItem ? "rounded-b-md" : ""}`}
    >
      <div className="flex flex-row items-center space-x-2">
        <img src={imagePath} alt={imageAltText} className="size-4" />
        {routePath || name === ".." ? (
          <Link
            to={`/main${routePath}`}
            className={`${
              name === ".."
                ? "font-bold text-gray"
                : "text-secondary hover:underline"
            } text-sm hover:text-blue`}
          >
            {name === ".." ? name.split("").join(" ") : name}
          </Link>
        ) : (
          <h1 className="truncate text-sm text-secondary">{name}</h1>
        )}
      </div>
      <p className="hidden truncate text-sm text-gray sm:inline md:inline lg:inline">
        {commit}
      </p>
      <p className="hidden text-right text-sm text-gray md:inline lg:inline">
        {date === "cur_date"
          ? new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })
          : date}
      </p>
    </li>
  );
};

export default Item;
