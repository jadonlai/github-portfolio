import { Button } from "../../components/interactables";

const Header = () => {
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-row items-center space-x-3">
        <Button
          onClick={() => {}}
          imagePath="/github-portfolio/assets/branch.svg"
          imageAltText="branch"
          text="main"
          buttonStyles="hover:bg-gray-100 hover:cursor-default"
        />
        <div className="hidden flex-row space-x-3 md:flex lg:flex">
          <div className="flex flex-row items-center space-x-1">
            <img src="/github-portfolio/assets/branch.svg" alt="branch" />
            <h1 className="text-sm font-bold text-secondary">1</h1>
            <h1 className="text-sm text-gray">Branch</h1>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <img src="/github-portfolio/assets/tags.svg" alt="tags" />
            <h1 className="text-sm text-gray">Tags</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-3">
        {/* <Search width={200} text="Go to file" /> */}
        <Button
          onClick={() =>
            window.open(
              "https://github.com/jadonlai/github-portfolio",
              "_blank",
            )
          }
          imagePath="/github-portfolio/assets/code_secondary.svg"
          imageAltText="code"
          text="Code"
          textStyles={
            document.body.classList.contains("dark") ? "" : "text-primary"
          }
          buttonStyles="bg-green hover:bg-green-hover border-green-border"
          border={false}
        />
      </div>
    </div>
  );
};

export default Header;
