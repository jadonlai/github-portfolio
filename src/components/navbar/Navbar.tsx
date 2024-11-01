import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Tab from "./Tab";

const Navbar = () => {
  return (
    <div className="flex h-[105px] flex-col justify-between bg-primary-100 text-secondary">
      <div className="mx-4 flex flex-row items-center justify-between pt-4">
        <HeaderLeft />
        <HeaderRight />
      </div>
      <ul className="flex flex-row space-x-2 border-b-[1px] border-b-gray-border pl-4">
        <Tab title="Code" imagePath="/assets/code.svg" selected />
        <Tab title="Issues" imagePath="/assets/issues.svg" />
        <Tab title="Pull requests" imagePath="/assets/pull_requests.svg" />
      </ul>
    </div>
  );
};

export default Navbar;
