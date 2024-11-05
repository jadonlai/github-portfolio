import { Link, useLocation } from "react-router-dom";

import { DirectoriesList } from "../../../components/directorieslist";
import { structure } from "../../../constants";
import Pdf from "./filetypes/Pdf";
import { Button } from "../../../components/interactables";
import MarkdownFile from "./filetypes/MarkdownFile";
import { useFile } from "../../../hooks";
import Video from "./filetypes/Video";

const FileNotSupported = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold text-secondary">File not supported</h1>
    </div>
  );
};

const FileInProgress = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold text-secondary">
        File currently in progress!
      </h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="grid w-full grid-cols-3 justify-between truncate text-xs font-bold text-gray sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <h1>Name</h1>
      <h1 className="hidden sm:inline md:inline lg:inline">Description</h1>
      <h1 className="hidden text-right md:inline lg:inline">Timeframe</h1>
    </div>
  );
};

const File = () => {
  const { dimensions, getPath, copyImage, copyImageClick, getItem, download } =
    useFile();

  const location = useLocation();
  const path = getPath(location.pathname);
  let curPath = "/main";

  const headerHeight = 42.5;

  const curItem = getItem(path, structure);
  if (!curItem) {
    return;
  }

  const backItem = {
    name: "..",
    type: "folder",
    commit: "",
    date: "",
  };

  return (
    <div className="h-full min-h-screen w-full border-l-[1px] border-l-gray-border px-4 pt-5">
      <div className="mb-6 flex h-5 flex-row items-center space-x-1">
        <Link to="/" className="text-base font-bold text-blue hover:underline">
          portfolio
        </Link>
        {path[0] === "/main" ? (
          <h1 className="text-base text-gray">/</h1>
        ) : (
          <div className="flex flex-row items-center space-x-1">
            {path.map((item, index) => {
              let pathTag;
              curPath += `/${item}`;
              if (index === path.length - 1) {
                pathTag = (
                  <h1 className="text-base font-bold text-secondary">{item}</h1>
                );
              } else {
                pathTag = (
                  <Link
                    to={curPath}
                    className="text-base text-blue hover:underline"
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <div
                  key={curPath}
                  className="flex flex-row items-center space-x-1"
                >
                  <h1 className="text-base text-gray">/</h1>
                  {pathTag}
                </div>
              );
            })}
            <button
              onClick={() => {
                copyImageClick();
              }}
              className="flex size-7 items-center justify-center rounded-md hover:bg-gray-collapsehover"
            >
              {copyImage === "/assets/copy.svg" ? (
                <img src="/assets/copy.svg" alt="copy" className="size-4" />
              ) : (
                <img src="/assets/check.svg" alt="check" className="size-4" />
              )}
            </button>
          </div>
        )}
      </div>
      <div className="flex w-full flex-row items-center justify-between rounded-md border-[1px] border-gray-border p-3">
        <div className="flex flex-row items-center">
          <img src="/assets/logo.png" alt="logo" className="mr-2 size-5" />
          <h1 className="text-sm font-bold text-secondary">jadonlai</h1>
          <h1 className="truncate whitespace-nowrap px-2 text-sm text-gray">
            {path[0] === "/main" ? "initial commit" : curItem.commit}
          </h1>
        </div>
        <h1 className="truncate whitespace-nowrap text-sm text-gray">
          {curItem.date === "cur_date"
            ? new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            : curItem.date}
        </h1>
      </div>
      {curItem.type === "folder" || path[0] === "/main" ? (
        <DirectoriesList
          topItem={<Header />}
          topItemStyles="h-[40px] px-4"
          items={
            path[0] === "/main" ? curItem : [backItem, ...curItem.contents]
          }
          basePath={path[0] === "/main" ? "" : path.join("/")}
        />
      ) : (
        <div className={`mb-10 mt-4 h-[${dimensions.height}px]`}>
          <ul className="size-full divide-y-[1px] divide-gray-border rounded-md border-[1px] border-gray-border">
            <li
              key={0}
              className={`flex flex-row items-center justify-between rounded-t-md bg-primary-200 px-3 py-2`}
            >
              <h1 className="text-sm font-bold text-secondary">Preview</h1>
              <Button
                onClick={() => {
                  download(`/portfolio${location.pathname}`, curItem.name);
                }}
                imagePath="/assets/download.svg"
                imageAltText="download"
                imageStyles="size-4"
                height={28}
                buttonStyles="px-[5px]"
              />
            </li>
            <li key={1} className="flex justify-center">
              {curItem.type === "file" ? (
                curItem.file_type === "pdf" ? (
                  <Pdf
                    filepath={`/portfolio${location.pathname}`}
                    height={dimensions.height - headerHeight}
                  />
                ) : curItem.file_type === "markdown" ? (
                  <MarkdownFile
                    filepath={`/portfolio${location.pathname}`}
                    styles="mx-40"
                  />
                ) : curItem.file_type === "video" ? (
                  <Video
                    filepath={`/portfolio${location.pathname}`}
                    height={dimensions.height - headerHeight}
                    orientation={curItem.orientation}
                  />
                ) : curItem.file_type === "photos" ? (
                  <FileInProgress />
                ) : (
                  <FileNotSupported />
                )
              ) : (
                <FileNotSupported />
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default File;
