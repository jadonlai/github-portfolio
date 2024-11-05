import Item from "./Item";

interface DirectoriesListProps {
  topItem: React.ReactElement;
  topItemStyles?: string;
  items: {
    type: string;
    name: string;
    commit: string;
    date: string;
  }[];
  basePath?: string;
}

const DirectoriesList = ({
  topItem,
  topItemStyles,
  items,
  basePath,
}: DirectoriesListProps) => {
  return (
    <ul className="mt-4 divide-y-[1px] divide-gray-border rounded-md border-[1px] border-gray-border">
      <li
        className={`flex h-[50px] flex-row items-center rounded-t-md bg-primary-200 px-3 ${topItemStyles}`}
      >
        {topItem}
      </li>
      {items &&
        items.map((item, index) => (
          <Item
            key={item.name}
            imagePath={`/assets/${item.type}.svg`}
            imageAltText={item.type}
            name={item.name}
            routePath={
              item.name === ".."
                ? `/${basePath}/${item.name}`.replace(/\/[^/]+\/\.\.$/, "")
                : basePath
                  ? `/${basePath}/${item.name}`
                  : `/${item.name}`
            }
            commit={item.commit}
            date={item.date}
            lastItem={index === items.length - 1}
          />
        ))}
    </ul>
  );
};

export default DirectoriesList;
