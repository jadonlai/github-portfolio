import { Button, Search } from "../../components/interactables";
import { DirectoriesList } from "../../components/directorieslist";
import Readme from "./Readme";
import { structure } from "../../constants";

interface HeadeTagProps {
  image: string;
  text: string;
  styles?: string;
}

const HeaderTag = ({ image, text, styles }: HeadeTagProps) => {
  return (
    <div className={`flex flex-row items-center space-x-1 ${styles}`}>
      <img src={`/assets/${image}.svg`} alt={image} className="size-4" />
      <p className="truncate text-sm text-gray">{text}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex flex-row items-center space-x-2">
        <img
          src="/assets/profile.png"
          alt="profile"
          className="size-5 rounded-full border-[1px] border-gray-border"
        />
        <button
          onClick={() => {
            window.open("https://github.com/jadonlai", "_blank");
          }}
        >
          <h1 className="text-sm font-bold text-secondary hover:underline">
            jadonlai
          </h1>
        </button>
      </div>
      <HeaderTag image="branch" text="Software Developer" />
      <HeaderTag image="star" text="AI/ML and Full Stack Specialist" />
      <HeaderTag image="location_pin" text="San Luis Obispo, CA" />
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-[73.75%]">
      <div className="flex flex-row items-start justify-between">
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
            <h1 className="text-sm font-bold text-secondary">1</h1>
            <h1 className="text-sm text-gray">Branch</h1>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <img src="/assets/tags.svg" alt="tags" />
            <h1 className="text-sm text-gray">Tags</h1>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <Search width={200} text="Go to file" />
          <Button
            onClick={() =>
              window.open(
                "https://github.com/jadonlai/github-portfolio",
                "_blank",
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
