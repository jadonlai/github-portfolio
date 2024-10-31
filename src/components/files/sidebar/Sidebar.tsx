import { Button, Search } from "../../interactables";
import Directories from "./Directories";

const Sidebar = () => {
  return (
    <div className="h-full min-h-screen w-[320px] border-r-[1px] border-gray-border p-4">
      <div className="flex flex-row items-center space-x-2">
        <Button
          imagePath="/assets/collapse.svg"
          imageAltText="collapse"
          onClick={() => {}}
          buttonStyles="border-none bg-gray-collapseopen hover:bg-gray-collapsehover"
        />
        <h1 className="text-secondary text-base font-bold">Files</h1>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <Button
          imagePath="/assets/branch.svg"
          imageAltText="branch"
          text="main"
          onClick={() => {}}
        />
        <Button
          imagePath="/assets/search.svg"
          imageAltText="search"
          onClick={() => {}}
        />
      </div>
      <div className="mt-2">
        <Search text="Go to file" width={287} />
      </div>
      <div className="mt-3">
        <Directories />
      </div>
    </div>
  );
};

export default Sidebar;
