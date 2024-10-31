import { Button, Search } from "../../components/interactables";
import { DirectoriesList } from "../../components/directorieslist";
import Readme from "./Readme";
import { structure } from "../../constants";

const Header = () => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <img
        src="/assets/profile.png"
        alt="profile"
        className="w-5 h-5 rounded-full"
      />
      <button
        onClick={() => {
          window.open("https://github.com/jadonlai", "_blank");
        }}
      >
        <h1 className="text-secondary text-sm font-bold hover:underline">
          jadonlai
        </h1>
      </button>
      <p className="text-gray text-sm">fixed bug</p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-[73.75%]">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row items-center space-x-3">
          <Button
            onClick={() => {}}
            imagePath="/assets/branch.svg"
            imageAltText="branch"
            text="main"
            buttonStyles="hover:bg-gray-100 hover:cursor-default"
          />
          <div className="flex flex-row items-center space-x-1">
            <img src="/assets/branch.svg" alt="branch" />
            <h1 className="text-secondary text-sm font-bold">1</h1>
            <h1 className="text-gray text-sm">Branches</h1>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <img src="/assets/tags.svg" alt="tags" />
            <h1 className="text-gray text-sm">Tags</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <Search width={200} text="Go to file" />
          <Button
            onClick={() =>
              window.open(
                "https://github.com/jadonlai/github-portfolio",
                "_blank"
              )
            }
            imagePath="/assets/code_secondary.svg"
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
      <DirectoriesList topItem={<Header />} items={structure} />
      <Readme />
    </div>
  );
};

export default Content;
