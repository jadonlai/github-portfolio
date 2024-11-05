import { Button } from "../../../components/interactables";
import Directories from "./Directories";

const Sidebar = () => {
  return (
    <div className="h-full w-[390px] p-4">
      <div className="flex flex-row items-center space-x-2">
        <Button
          imagePath="/github-portfolio/assets/collapse.svg"
          imageAltText="collapse"
          onClick={() => {}}
          buttonStyles="border-none bg-gray-collapseopen hover:bg-gray-collapsehover"
        />
        <h1 className="text-base font-bold text-secondary">Files</h1>
      </div>
      <div className="mt-4 flex flex-row items-center justify-between">
        <Button
          imagePath="/github-portfolio/assets/branch.svg"
          imageAltText="branch"
          text="main"
          onClick={() => {}}
        />
        <Button
          imagePath="/github-portfolio/assets/search.svg"
          imageAltText="search"
          onClick={() => {}}
        />
      </div>
      {/* <div className="mt-2">
        <Search text="Go to file" width={287} />
      </div> */}
      <div className="mt-3">
        <Directories />
      </div>
    </div>
  );
};

export default Sidebar;
