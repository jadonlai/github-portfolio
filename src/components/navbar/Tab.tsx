interface TabProps {
  title: string;
  imagePath: string;
  selected?: boolean;
}

const Tab = ({ title, imagePath, selected = false }: TabProps) => {
  return (
    <li
      className={`flex flex-row items-center space-x-2 pb-3 px-2 ${
        selected ? "border-b-2 border-b-orange" : ""
      }`}
    >
      <img src={imagePath} alt="navbarIcon" className="w-4 h-4" />
      <h1 className={`text-secondary text-sm ${selected ? "font-bold" : ""}`}>
        {title}
      </h1>
    </li>
  );
};

export default Tab;
