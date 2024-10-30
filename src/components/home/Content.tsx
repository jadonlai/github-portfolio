import { Button, Search } from "../interactables";
import Item from "./Item";
import Readme from "./Readme";

const Content = () => {
  const items = [
    {
      type: "folder",
      name: "experience",
      commit: "initial commit",
      date: "2022-01-01",
    },
    {
      type: "folder",
      name: "projects",
      commit: "initial commit",
      date: "2022-01-01",
    },
    {
      type: "file",
      name: "README.md",
      commit: "initial commit",
      date: "2022-01-01",
    },
    {
      type: "file",
      name: "resume.pdf",
      commit: "initial commit",
      date: "2022-01-01",
      lastItem: true,
    },
  ];

  return (
    <div className="w-[73.75%]">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row items-center space-x-3">
          <Button
            onClick={() => {}}
            imagePath="/assets/branch.svg"
            imageAltText="branch"
            text="main"
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
            onClick={() => window.open("https://github.com/jadonlai", "_blank")}
            imagePath="/assets/code_secondary.svg"
            imageAltText="code"
            text="Code"
            buttonStyles="bg-green hover:bg-green-hover border-green-border"
            border={false}
          />
        </div>
      </div>
      <ul className="mt-4 border-[1px] border-gray-border rounded-md">
        <li className="h-[50px] bg-primary-200 rounded-t-md flex flex-row items-center px-3">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="assets/profile.png"
              alt="profile"
              className="w-5 h-5 rounded-full"
            />
            <h1 className="text-secondary text-sm font-bold">jadonlai</h1>
            <p className="text-gray text-sm">fixed bug</p>
          </div>
        </li>
        <ul>
          {items.map((item) => (
            <Item
              key={item.name}
              imagePath={`assets/${item.type}.svg`}
              imageAltText={item.type}
              name={item.name}
              routePath={item.name}
              commit={item.commit}
              date={item.date}
              lastItem={item.lastItem}
            />
          ))}
        </ul>
      </ul>
      <Readme />
    </div>
  );
};

export default Content;
