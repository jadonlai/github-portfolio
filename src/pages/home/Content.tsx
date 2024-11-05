import { Button } from "../../components/interactables";
import { DirectoriesList } from "../../components/directorieslist";
import Readme from "./Readme";
import { structure } from "../../constants";

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

interface ContentHeaderTagProps {
  image: string;
  text: string;
  styles?: string;
}

const ContentHeaderTag = ({ image, text, styles }: ContentHeaderTagProps) => {
  return (
    <div className={`flex flex-row items-center space-x-1 ${styles}`}>
      <img
        src={`/github-portfolio/assets/${image}.svg`}
        alt={image}
        className="size-4"
      />
      <p className="whitespace-nowrap text-sm text-gray">{text}</p>
    </div>
  );
};

const ContentHeader = () => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <div className="flex flex-row items-center space-x-2">
        <img
          src="/github-portfolio/assets/profile.png"
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
      <ContentHeaderTag
        image="profession"
        text="Software Developer"
        styles="hidden lg:flex md:flex sm:flex"
      />
      <ContentHeaderTag
        image="star"
        text="AI/ML and Full Stack Specialist"
        styles="hidden lg:flex md:flex"
      />
      <ContentHeaderTag
        image="location_pin"
        text="San Luis Obispo, CA"
        styles="hidden lg:flex"
      />
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-[73.75%]">
      <Header />
      <DirectoriesList topItem={<ContentHeader />} items={structure} />
      <Readme />
    </div>
  );
};

export default Content;