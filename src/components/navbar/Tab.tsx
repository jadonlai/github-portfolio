import { Link } from "react-router-dom";

interface TabProps {
  title: string;
  imagePath: string;
  selected?: boolean;
}

const Tab = ({ title, imagePath, selected = false }: TabProps) => {
  return (
    <Link to="/" className={selected ? "border-b-2 border-b-orange" : ""}>
      <div className="flex flex-row items-center space-x-2 hover:bg-primary-300 rounded-md py-1 px-3 my-2">
        <img src={imagePath} alt="navbarIcon" className="w-4 h-4" />
        <h1 className={`text-secondary text-sm ${selected ? "font-bold" : ""}`}>
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default Tab;
