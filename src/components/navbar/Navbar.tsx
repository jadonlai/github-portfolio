import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Tab from "./Tab";

const Navbar = () => {
  return (
    <div className="bg-primary-100 text-secondary h-[105px] flex flex-col justify-between">
      <div className="pt-4 ml-16 mr-4 flex flex-row items-center justify-between">
        <HeaderLeft />
        <HeaderRight />
      </div>
      <ul className="flex flex-row space-x-2 pl-4 border-b-[1px] border-b-gray-border">
        <Tab title="Code" imagePath="/assets/code.svg" selected />
        <Tab title="Issues" imagePath="/assets/issues.svg" />
        <Tab title="Pull requests" imagePath="/assets/pull_requests.svg" />
      </ul>
    </div>
  );
};

export default Navbar;
