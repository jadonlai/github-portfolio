import Item from "./Item";

interface DirectoriesListProps {
  topItem: React.ReactElement;
  items: {
    type: string;
    name: string;
    commit: string;
    date: string;
    lastItem?: boolean;
  }[];
}

const DirectoriesList = ({ topItem, items }: DirectoriesListProps) => {
  return (
    <ul className="mt-4 border-[1px] border-gray-border divide-y-[1px] divide-gray-border rounded-md">
      <li className="h-[50px] bg-primary-200 rounded-t-md flex flex-row items-center px-3">
        {topItem}
      </li>
      {items.map((item) => (
        <Item
          key={item.name}
          imagePath={`/assets/${item.type}.svg`}
          imageAltText={item.type}
          name={item.name}
          routePath={item.name}
          commit={item.commit}
          date={item.date}
          lastItem={item.lastItem}
        />
      ))}
    </ul>
  );
};

export default DirectoriesList;
