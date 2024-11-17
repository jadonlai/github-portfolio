import { Link } from "react-router-dom";

import { useSidebarContext } from "../../contexts/SidebarContext";

interface TabProps {
  title: string;
  imagePath: string;
  selected?: boolean;
}

const Tab = ({ title, imagePath, selected = false }: TabProps) => {
  const { toggleSidebar } = useSidebarContext();

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        toggleSidebar(true);
      }}
      className={selected ? "border-b-2 border-b-orange" : ""}
    >
      <Link to="/">
        <div className="my-2 flex flex-row items-center space-x-2 rounded-md px-3 py-1 hover:bg-primary-300">
          <img src={imagePath} alt="navbarIcon" className="size-4" />
          <h1
            className={`text-sm text-secondary ${selected ? "font-bold" : ""}`}
          >
            {title}
          </h1>
        </div>
      </Link>
    </button>
  );
};

export default Tab;
