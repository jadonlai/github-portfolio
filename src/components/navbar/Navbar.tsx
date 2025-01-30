import HeaderLeft from "./HeaderLeft";
import Tab from "./Tab";

const Navbar = () => {
  return (
    <div className="flex h-[105px] w-full min-w-full flex-col justify-between bg-primary-100 text-secondary">
      <div className="mx-4 flex flex-row items-center justify-between pt-4">
        <HeaderLeft />
      </div>
      <ul className="flex flex-row space-x-2 border-b-[1px] border-b-gray-border pl-4">
        <Tab
          title="Code"
          imagePath="/github-portfolio/assets/code.svg"
          selected
        />
      </ul>
    </div>
  );
};

export default Navbar;
