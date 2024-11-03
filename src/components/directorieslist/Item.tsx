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
        gridTemplateColumns: "1fr 1.5fr 1fr",
      }}
      className="grid h-[42px] grid-cols-3 items-center bg-primary px-3 hover:bg-primary-200"
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
      <p className="truncate text-sm text-gray">{commit}</p>
      <p className="truncate text-right text-sm text-gray">
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
