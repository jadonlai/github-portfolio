import { Link } from "react-router-dom";

import { Button } from "../../../components/interactables";
import { useFile } from "../../../hooks";
import { useSidebarContext } from "../../../contexts/SidebarContext";

interface PathProps {
  path: string[];
}

const Path = ({ path }: PathProps) => {
  const { copyImage, copyImageClick } = useFile();
  const { sidebarOpen, toggleSidebar } = useSidebarContext();
  let curPath = "/main";

  return (
    <div className="mb-6 flex h-5 flex-row items-center space-x-1">
      {!sidebarOpen && (
        <Button
          imagePath="/github-portfolio/assets/collapse_open.svg"
          imageAltText="collapse_open"
          onClick={() => {
            toggleSidebar(true);
          }}
          buttonStyles="border-none mr-1 mt-1 self-center bg-gray-collapseopen hover:bg-gray-collapsehover"
        />
      )}
      <button
        onClick={(event) => {
          event.preventDefault();
          toggleSidebar(true);
        }}
      >
        <Link to="/" className="text-base font-bold text-blue hover:underline">
          portfolio
        </Link>
      </button>
      {path[0] === "/main" ? (
        <h1 className="text-base text-gray">/</h1>
      ) : (
        <div className="flex flex-row items-center space-x-1">
          {path.map((item, index) => {
            let pathTag;
            curPath += `/${item}`;
            if (index === path.length - 1) {
              pathTag = (
                <h1 className="text-base font-bold text-secondary">{item}</h1>
              );
            } else {
              pathTag = (
                <Link
                  to={curPath}
                  className="text-base text-blue hover:underline"
                >
                  {item}
                </Link>
              );
            }
            return (
              <div
                key={curPath}
                className="flex flex-row items-center space-x-1"
              >
                <h1 className="text-base text-gray">/</h1>
                {pathTag}
              </div>
            );
          })}
          <button
            onClick={() => {
              copyImageClick();
            }}
            className="flex size-7 items-center justify-center rounded-md hover:bg-gray-collapsehover"
          >
            {copyImage === "/github-portfolio/assets/copy.svg" ? (
              <img
                src="/github-portfolio/assets/copy.svg"
                alt="copy"
                className="size-4"
              />
            ) : (
              <img
                src="/github-portfolio/assets/check.svg"
                alt="check"
                className="size-4"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Path;
